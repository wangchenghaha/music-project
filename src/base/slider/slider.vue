<template>
  <div class="slider" ref="slider">
    <div class="slider-content" ref="sliderContent">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) of dots" :class="currentIndex === index ? 'active' : ''" :key="index"></span>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import {addClass} from "assets/js/dom.js"

export default {
  data() {
    return {
      dots:[],
      currentIndex:0
    };
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._setSliderWidth(false);
      this._initDots()
      this._initSlider();

      if (this.autoPlay) {
        this._autoPlay()
      };

      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
      })
    });
  },
  methods: {
    _setSliderWidth(isResize) {
      // debugger
      this.children = this.$refs.sliderContent.children;
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, "slider-item");
        child.style.width = sliderWidth + "px";
        width += sliderWidth
      }
      if(this.loop && !isResize){
        width += 2 * sliderWidth
      }
      // alert(width)
      this.$refs.sliderContent.style.width = width + "px"
    },
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY:false,
        momentum:false,
        snap: {
          loop: this.loop,
          threshold: 0.2,
          speed: 400,
        }
      });
      this.slider.on('scrollEnd',() => {
        console.log(this.slider.getCurrentPage().pageX)
        let pageIndex = this.slider.getCurrentPage().pageX;
        this.currentIndex = pageIndex;
      })
    },
    _autoPlay() {
      clearInterval(timer);
      let timer = setInterval(() => {
        this.slider.next()
      }, this.interval)
    }
  }
};
</script>
<style lang="stylus" scoped>
.slider
  overflow hidden
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  .slider-content
    position relative
    .slider-item
      float left
      img
        width 100%
  .dots
    position absolute
    right 0
    left 0
    bottom 12px
    text-align center
    .dot
      display inline-block
      margin 0 4px
      width 8px
      height 8px
      border-radius 50%
      background-color $color-text
      &.active
        width 20px
        border-radius 5px
        backround $color-text-ll
</style>


