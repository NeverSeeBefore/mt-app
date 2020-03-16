<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{ active: tab == item.tab}"
        :data-tab="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[tab]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{ item.subTitle }}</div>
            <!-- <div class="price-info" v-if="item.rent_num && item.price_info.current_price"> -->
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <!-- <span class="old-price">门市价¥{{ item.price }}</span> -->
              <span class="sold bottom-right-info">{{ item.address }}</span>
            </div>
            <!-- <div class="price-info" v-else-if="!item.rent_num">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{ item.price_info.avg_price }} /</span>
                <span class="units">
                    {{ item.price_info.units }}
                </span>
              </span>
            </div> -->
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'

export default {
  data() {
    return {
      tab: null,
      resultsData:{},
      // list: []
    };
  },
  created() {
    api.resultsByKeywords().then(res=> {
      console.log(res.data.data);
      this.resultsData = res.data.data;
    })
  },
  props: ["nav"],
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return;
      }
      this.tab = dom.getAttribute("data-tab");
      // 请求数据
    }
  }
};
</script>


<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

