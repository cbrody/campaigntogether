<template>
  <div class="question">
    <h1>Can you chip in?</h1>
    <p class="intro">All donations make a huge difference!</p>

    <div class="slider-container">
      <Slider :initial-value="donation" :steps="steps" @value:changed="donationChanged" />
    </div>
    
    <vue-stripe-checkout
      ref="checkoutRef"
      name="Finish your donation"
      currency="gbp"
      :amount="donation * 100"
      :allow-remember-me="false"
      @done="done"
    ></vue-stripe-checkout>

    <button class="btn btn-black next" @click="save()">Next</button>
  </div>
</template>

<script>
import Slider from '../Slider.vue';
import VueStripeCheckout from 'vue-stripe-checkout';
import Vue from 'vue';
 
Vue.use(VueStripeCheckout, 'pk_live_M5Ov6U9ishtRX7WJj6vpPOkb');

export default {
  components: {
    Slider
  },
  data() {
    return {
      donated: false,
      donation: 'help in other ways',
      steps: [
        'help in other ways',
        '£5',
        '£10',
        '£20',
        '£50',
        '£100'
      ]
    }
  },
  methods: {
    async checkout () {
      const { token, args } = await this.$refs.checkoutRef.open();
    },
    donationChanged(amount) {
      this.donation = amount.replace('£', '');
    },
    done ({token, args}) {
      var __this = this;
      $.ajax({
        method: 'POST',
        url: 'https://gyycr4ld2a.execute-api.eu-west-1.amazonaws.com/Production/donation',
        data: JSON.stringify({source: token.id, amount: this.donation * 100, receipt_email: token.email})
      }).always(function() {
        __this.$emit('next');
        __this.$emit('donated');
      });
    },
    save() {
      if (this.donation !== 'help in other ways') {
        this.checkout();
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

  .slider-container {
    max-width: 800px;
    margin: 75px auto 120px auto;

    @include breakpoint(xs) {
      margin: 25px 0px;
    }
  }
</style>
