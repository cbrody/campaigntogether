<template>
  <div class="question">
    <h1 v-if="donated">Thanks for your donation!<small>We just need a few more details now</small></h1>
    <h1 v-else>Some final details</h1>
    <p class="intro">Don't worry, we keep all personal information private.</p>

    <div class="input-group name-input">
      <div class="first-name">
        <input type="text" v-model="firstName" @keyup="nameUpdated" placeholder="First name" />
      </div>

      <div class="last-name">
        <input type="text" v-model="lastName" @keyup="nameUpdated" placeholder="Last name" />
      </div>

      <p class="error" v-if="showError">Please enter your full name</p>
    </div>

    <div class="input-group email-input">
      <p class="intro">What's your email address?</p>

      <input type="email" v-model="email" @keyup="nameUpdated" placeholder="Email address" />
      <p class="error" v-if="showEmailError">Please enter your email address</p>
    </div>

    <div class="input-group email-input">
      <p class="intro">And what's your phone number?</p>

      <input type="phone" v-model="phoneNumber" @keyup="nameUpdated" placeholder="Your phone number" />
    </div>

    <div class="input-group consent-input">
      <input type="checkbox" v-model="consent" /> I consent to Campaign Together emailing me with information on campaigns, volunteering, and related news
      <p class="error" v-if="showConsentError">Please accept our terms</p>
    </div>

    <button class="btn btn-black next" @click="save()">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    donated: Boolean
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      consent: false,
      showError: false,
      showEmailError: false,
      showConsentError: false
    }
  },
  methods: {
    nameUpdated() {
      this.$emit('details:updated', this.firstName, this.lastName, this.email, this.phoneNumber);
    },
    save() {
      this.showError = false;
      this.showEmailError = false;
      this.showConsentError = false;

      if (this.firstName.length === 0 || this.lastName.length === 0) {
        this.showError = true;
      }
      else if (this.email.length === 0) {
        this.showEmailError = true;
      }
      else if (this.consent === false) {
        this.showConsentError = true;
      }
      else {
        this.$emit('next');
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../scss/_mixins.scss';

  h1 {
    small {
      font-size: 18px;
    }
  }

  .name-input {
    margin: 45px auto;
    max-width: 600px;

    .first-name,
    .last-name {
      display: inline-block;
      width: 50%;

      input {
        width: 95%;
      }
    }

    .last-name {
      text-align: right;
    }

    @include breakpoint(xs) {
      margin: 20px auto;

      .first-name,
      .last-name {
        input {
          width: 100%;
        }
      }
    }
  }

  .email-input {
    margin: auto;
  }

  .consent-input {
    margin: 40px auto;
  }
</style>
