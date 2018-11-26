<template>
  <div id="app">
    <div>
      <v-picker class="select" :items="sect" @change="sectChange"></v-picker>
      <v-picker class="select" :items="heartMethod" @change="internalWorkChange"></v-picker>
    </div>
    <div>
      {{chooseSect}}:{{chooseInternalWork}}
    </div>
  </div>
</template>

<script>

const sects = [
  '霸刀',
  '长歌',
  '苍云',
  '丐帮',
  '纯阳',
  '藏剑',
  '少林',
  '五毒',
  '天策',
  '唐门',
  '七秀',
  '明教',
  '万花',
];
const internalWorkList = {
  '0': ['北傲诀'],
  '1': ['莫问', '相知'],
  '2': ['分山劲', '铁骨衣'],
  '3': ['笑尘决'],
  '4': ['太虚剑意', '紫霞功'],
  '5': ['山居剑意', '问水决'],
  '6': ['易筋经', '洗髓经'],
  '7': ['毒经', '补天诀'],
  '8': ['傲雪战意', '铁牢律'],
  '9': ['惊羽诀', '天罗诡道'],
  '10': ['冰心诀', '云裳心经'],
  '11': ['焚影圣诀', '明尊琉璃体'],
  '12': ['花间游', '离经易道'],
}
const disableds = [0, 9, 11];

const defualtActive = 4;

export default {
  name: 'app',
  data() {
    return {
      sect: {
        values: sects,
        displayValues: sects,
        active: 4,
        disableds,
      },
      heartMethod: {
        values: internalWorkList[defualtActive],
        displayValues: this.values,
        active: 0,
      },
      chooseSect: sects[4],
      chooseInternalWork: internalWorkList[defualtActive][0],
    };
  },
  methods: {
    sectChange(val) {
      const values = internalWorkList[val.active];
      this.heartMethod = {
        values,
        active: 0,
      };
      this.chooseSect = val.value;
      this.chooseInternalWork = values[0];
    },
    internalWorkChange(val) {
      this.chooseInternalWork = val.value;
    },
  },
  mounted() {

  },
};
</script>

<style>
#app {
  text-align: center;
}
.select {
  float: left;
  width: 50%;
}

</style>