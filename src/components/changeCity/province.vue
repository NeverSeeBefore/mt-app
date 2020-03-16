<template>
  <div class="province">
    <span class="name">按省份选择：</span>
    <mySelect
      :list="provinceList"
      title="省份"
      :value="province"
      :showActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
      pclass="province"
    />
    <mySelect
      :list="cityList"
      title="城市"
      :value="city"
      :showActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
      pclass="city"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import mySelect from "./select";
import api from '@/api/index.js'

export default {
  data() {
    return {
      cityDisabled: true,
      provinceList: [],
      province: "省份",
      cityList: [],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList:[],
        searchWord: '',
        loading: false
    };
  },
  created() {
    api.getProvince().then(res => {
      this.provinceList= res.data.data.map((item) => {
        item.name = item.provinceName;
        return item;
      })
    })
    // api.getCityList().then(res => {
    //   console.log(res.data.data)
    //   // this.provinceList= res.data.data.map((item) => {
    //   //   item.name = item.provinceName;
    //   //   return item;
    //   // })
    // })
  },
  components: {
    mySelect
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(val) {
        console.log(val);
    },
    changeProvince(item) {
      this.province = item.name;
      this.cityDisabled = false;
      this.cityList = item.cityInfoList;
    },
    changeCity (item) {
      this.city = item.name;
      this.$store.dispatch('setPosition', item);
      this.$router.push({name: 'index'});
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>


