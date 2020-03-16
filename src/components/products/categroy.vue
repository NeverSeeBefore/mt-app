<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <mySelect :name="item.title" :list="item.subList" />
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <mySelect :name="item.title" :list="item.subList" />
      </dd>
    </dl>
  </div>
</template>

<script>
import mySelect from "./select.vue";
export default {
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "日本菜",
              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          subList:
          [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            },{
              name: "望京",
              id: 120200
            },
            {
              name: "昌平",
              id: 111222
            }
          ]
        }
      ]
    };
  },
  components: {
    mySelect
  }
};
</script>

<style>
</style>
