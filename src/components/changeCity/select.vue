<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div :class="['choose', disabled?'disabled':'']">
      <span>{{ value }}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content': true, 'active': showActive}">
        <h2>{{ title }}</h2>
        <div :class="['wrapper', pclass]">
          <div class="col" v-for="(listData, index) in renderList" :key="index">
            <span
              v-for="(item, index) in listData"
              :key="index"
              :class="{'mt-item': true, 'active': item.name == value}"
              @click="changeValue(item)"
            >{{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // showActive:false,
    };
  },
  props: ["list", "title", "value", "showActive",'disabled', 'pclass'],
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      // this.showActive = !this.showActive;
      if(!this.disabled){
        this.$emit("change_active", !this.showActive);
      }
    },
    documentClick() {
      // console.log('Document-Click', this.showActive);
      // if(this.showActive == true) this.showActive = false;
      this.$emit("change_active", false);
    },
    changeValue(item) {
      this.$emit("change", item);
    }
  },
  computed:  {
      renderList() {
          let col = Math.ceil(this.list.length / 12);
          let resultList = [];
          for( var i = 0; i < col; i ++){
            let data = this.list.slice(i * 12,i * 12 + 12);
            resultList.push(data);
          }
          return resultList;
      }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>

