<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <myMenu />
      </el-col>
      <el-col :span="19">
        <myLife />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <myContainer :nav="istyle" />
      </el-col>
      <el-col :span="24">
        <myContainer :nav="youhui" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import myMenu from "@/components/index/menu.vue";
import myLife from "@/components/index/life.vue";
import myContainer from "@/components/index/container.vue";
export default {
  data() {
    return {
      istyle: {
        class:"istyle",
        title: "有格调",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "约会"
          },
          {
            tab: "spa",
            text: "丽人SPA"
          },
          {
            tab: "movie",
            text: "电影演出"
          },
          {
            tab: "travel",
            text: "品质出游"
          }
        ]
      },
      youhui: {
        class:"youhui",
        title: "狠优惠",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "约会"
          },
          {
            tab: "spa",
            text: "丽人SPA"
          },
          {
            tab: "movie",
            text: "电影演出"
          },
          {
            tab: "travel",
            text: "品质出游"
          }
        ]
      },

    };
  },
  components: {
    myMenu,
    myLife,
    myContainer
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>

