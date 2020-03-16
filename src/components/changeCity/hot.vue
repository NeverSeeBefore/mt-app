<template>
  <div class="m-hcity">
    <dl>
      <dt>{{ title }}</dt>
      <dd v-for="(item, index) in list" :key="index" @click="handleClick(item)">{{ item.name }}</dd>
    </dl>
  </div>
</template>
<script>
export default {
    data () {
        return  {
            // hotList: []
        }
    },
    props: ['title', 'list'],
    methods: {
        handleClick (item) {
            console.log('iiiii',item);
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'});
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/hot.scss";
</style>


