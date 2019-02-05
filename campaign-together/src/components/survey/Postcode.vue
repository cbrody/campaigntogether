<template>
  <div class="question">
    <h1>What is your postcode?</h1>
    <p class="intro">Don't worry, we keep all personal information private</p>

    <div class="postcode-input">
      <input type="text" v-model="postcode" @keyup="fieldUpdated" />
      <p class="error" v-if="showError">Please enter your postcode</p>
    </div>

    <div class="distance-input">
      <p>I'd consider travelling to help nearby campaigns within</p>
      <input type="text" v-model="distance" @keyup="fieldUpdated" /> <span class="unit">miles of home</span>
    </div>

    <button class="btn btn-black next" @click="save()">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postcode: '',
      distance: '10',
      showError: false
    }
  },
  methods: {
    fieldUpdated() {
      this.$emit('location:updated', this.postcode, this.distance);
    },
    save() {
      if (this.postcode.length === 0 || this.distance.length === 0) {
        this.showError = true;
      }
      else {
        this.$emit('next');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins.scss';

  .postcode-input {
    max-width: 460px;
    margin: 45px auto;

    @include breakpoint(xs) {
      margin: 20px auto;
    }
  }

  .distance-input {
    max-width: 460px;
    margin: 45px auto;

    p {
      font-size: 18px;
      font-weight: 700;
    }

    .unit {
      font-size: 16px;
    }

    input[type="text"] {
      width: 80px;
      margin-right: 20px;
      text-align: center;
    }

    @include breakpoint(xs) {
      margin: 20px auto;

      p {
        margin-top: 0px;
        font-size: 16px;
      }
    }
  }
</style>
