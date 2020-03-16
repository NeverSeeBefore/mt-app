<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <router-link :to="{ name:'index' }">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
                </router-link>
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-show="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="index">
                            <router-link :to="{ name: 'goods', params:{name: item} }">{{item}}</router-link>
                        </dd>
                        
                    </dl>

                    <dl class="searchList" v-show="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{ name: 'goods', params:{name: item} }">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item, index) in suggestList" :key="index">{{item}}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import api from '@/api/index.js';
export default {
    data() {
        return {
            searchWord:'',
            // isSearchList:false,
            // isHotPlace:false,
            isFocus: false,
            hotPlaceList: [],
            searchList: [],
            suggestList: ['上海玛雅海滩水公园','上海迪士尼度假区','上海欢乐谷', '上海海昌海洋公园', '东方明珠广播电视塔', '上海科技馆', '外滩观光隧道', '上海迪士尼乐园酒店']
        }
    },
    computed: {
        isHotPlace: function () {
            return this.isFocus && !this.searchWord;
        },
        isSearchList: function () {
            return this.isFocus && this.searchWord;
        }
    },
    methods: {
        focus () {
            this.isFocus = true;
        },
        blur() {
            let self = this;
            setTimeout(() => {
                self.isFocus = false;
            }, 300);
        },
        input() {
            let val = this.searchWord;
            api.getSearchList().then(res => {
                this.searchList = res.data.data.list.filter( (item, index) => {
                    return item.indexOf(val) > -1;
                })
            })
        }
    },
    created () {
        api.searchHotWord().then(res => {
            this.hotPlaceList = res.data.data;
        })
    }
}
</script>




