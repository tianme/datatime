
module.exports = {
  pages: {
    index: {
      entry:
        process.env.NODE_ENV === 'development'
          ? './examples/index.js'
          : './src/components/picker/index.js',
    },
  },
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack: config => {
    config.module.rules.forEach(item => {
      if (item.test.toString() === '/\\.jsx?$/') {
        item.exclude = [() => ['./dist/', 'node_modules']];
      }
    });
    if (process.env.NODE_ENV === 'production') {
      config.output = Object.assign(config.output, {
        filename: 'vue-stone-picker.js',
        libraryTarget: 'umd',
      });
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization.delete('splitChunks');
      ['html-index', 'preload-index', 'prefetch-index'].forEach(item => {
        config.plugins.delete(item);
      });
      config.plugin('extract-css').tap(([options, ...args]) => [
        Object.assign({}, options, { filename: 'vue-stone-picker.css' }),
        ...args
      ])
    }

  },
};
