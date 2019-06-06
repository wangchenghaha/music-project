<template>
  <div class="recommend">
    <!-- 推荐榜单 -->
    <div class="recommend-content">
      <div class="slider-wrapper">
        <slider v-if="recommendList.length">
          <div v-for="item of recommendList" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt>
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommend } from "api/recommend.js";
import Slider from "base/slider/slider";
// import {ERR_OK} from "api/config.js"

export default {
  data() {
    return {
      recommendList: []
    };
  },
  created() {
    this._getRecommends();
  },
  components: {
    Slider
  },
  methods: {
    _getRecommends() {
      getRecommend().then(res => {
        console.log(res);
        if (res.code === this.ERR_OK) {
          this.recommendList = res.data.slider;
        }
        // console.log(res)
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.recommend
  .recommend-content
    .slider-wrapper
      position relative
      overflow hidden
      width 100%
      height 0
      padding-top 40%
</style>