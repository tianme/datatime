# picker （Vue 插件)。

## 如何使用

### 安装依赖

```
npm install vue-stone-picker --save-dev
```

```
import Vue from 'vue';
import 'vue-stone-picker/picker.css';
import picker from 'vue-stone-picker';

Vue.use(picker);
```

# Picker

## Tag Name

`v-picker`

属性名   |    类型    |    默认值    |   说明
----    | ----      | ----        | ----    |
items | Object | 无 | 配置 picker 组件中的选项，备注中会详细说明。
itemHeight | Number | 30 | 每行的高度。
offsetLine | Number | 3 | 上下偏移的行数。
id | Number | uuid | 组件的id。

备注：

```js
{
    values: ['BD', 'CG', 'CY'],   // 每一个选项的 value
    displayValues: [ '霸刀', '长歌', '苍云'],    // 对应每一个选项的显示文本，可忽略，如果忽略 displayValues === values
    active: 2,   // 当前激活选项的 value 的索引
    disableds: [1], // 要禁用 displayValues 索引
}
```

## Events
方法名称   |    说明    |    参数    |
----    | ----      | ----        |
change | 滚动完成后会触发此事件 | 当前被激活选项所组成的对象。
setIndex| 设置组件要选中的目标| 如果 `items.displayValues` 的索引。
---

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```