<template>
  <div class="component">
    <div class="slider">
      <vue-slider
        v-model="value"
        :dot-size="24"
        :min="1"
        :max="steps.length"
        :tooltip="false"
        :piecewise="true"
        :piecewise-label="true"
        :bg-style="bgStyles"
        :label-style="labelStyles"
        :label-active-style="labelActiveStyles"
        :slider-style="sliderStyles"
        :piecewise-style="piecewiseStyles"
        :process-style="processStyles"
        :data="steps"
        @callback="updateValue"
      ></vue-slider>
    </div>
    <div class="select">
      <select v-model="selectValue" @change="updateSelect">
        <option v-for="(step, index) in steps" v-bind:key="index" :value="index">{{step}}</option>
      </select>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component/src/vue2-slider.vue';

export default {
  components: {
    vueSlider
  },
  props: [
    'initialValue',
    'steps'
  ],
  data() {
    return {
      bgStyles: {
        "background": "#EF204F"
      },
      labelActiveStyles: {
        "font-weight": "500"
      },
      labelStyles: {
        "color": "black",
        "max-width": "140px",
        "width": "140px",
        "white-space": "initial",
        "margin-top": "10px",
        "font-size": "16px"
      },
      piecewiseStyles: {
        "background": "#EF204F"
      },
      processStyles: {
        "background": "#EF204F"
      },
      sliderStyles: {
        "background": "#EF204F",
        "box-shadow": "initial",
        "webkit-box-shadow": "initial"
      },
      value: 0,
      selectValue: 2
    }
  },
  created() {
    this.value = this.initialValue;
  },
  methods: {
    updateSelect() {
      this.$emit('value:changed', this.selectValue);
    },
    updateValue() {
      this.$emit('value:changed', this.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .component {
    .select {
      display: none;
    }

    @media (max-width: 768px) {
      .slider {
        display: none;
      }

      .select {
        display: block;
      }
    }
  }
</style>
