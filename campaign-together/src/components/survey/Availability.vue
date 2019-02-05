<template>
  <div class="question">
    <h1>How much time can you offer to the campaign?</h1>
    <p class="intro">We'll help you use your time efficiently</p>

    <div class="slider-container">
      <Slider :initial-value="time" :steps="steps" @value:changed="valueChanged" />
    </div>

    <button class="btn btn-black next" @click="save()">Next</button>
  </div>
</template>

<script>
import Slider from '../Slider.vue';

export default {
  components: {
    Slider
  },
  data() {
    return {
      steps: [
        "at least once",
        "a couple of hours a week",
        "one weekend a month",
        "every weekend",
        "endless time"
      ],
      time: 2
    }
  },
  methods: {
    save() {
      this.$emit('next');
    },
    valueChanged(value) {
      this.$emit('availability:updated', value);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins.scss';

  .slider-container {
    max-width: 800px;
    margin: 75px auto 120px auto;

    @include breakpoint(xs) {
      margin: 25px 0px;
    }
  }
</style>
