<template>
  <div id="app">
    <div class="grey">
      <div class="top-left-logo">
        <a href="https://campaigntogether.org"><img src="/assets/img/logo.svg"></a>
      </div>

      <div class="container">
        <Survey />
      </div>

      <div class="background">
        <img src="/assets/img/footer.png" />
      </div>
    </div>

    <div class="container">
      <div class="footer">
        <img class="logo" src="/assets/img/logo.svg" />

        <div class="social-media">
          <div class="icon"><a href="https://www.facebook.com/campaigntogether/"><img src="/assets/img/facebook.svg" /></a></div>
          <div class="icon"><a href="https://twitter.com/CampaignTgthr"><img src="/assets/img/twitter.svg" /></a></div>
        </div>

        <nav>
          <ul style="list-style: none;">
            <li class=" active-link" style="display: inline-block; margin-right: 30px; margin-bottom: 10px;">
                <a href="/" style="color: black; font-weight: bold;">Home</a>
            </li>
            <li class="" style="display: inline-block; margin-right: 30px; margin-bottom: 10px;">
              <a href="/about-us/" style="color: black; font-weight: bold;">About Us</a>
              </li>
            <li class="" style="display: inline-block; margin-right: 30px; margin-bottom: 10px;">
                <a href="/privacy-and-cookies/" style="color: black; font-weight: bold;">Privacy and cookies</a>
            </li>
            <li class="" style="display: inline-block; margin-right: 30px; margin-bottom: 10px;">
                <a href="https://www.gofundme.com/build-our-election-fighting-fund" style="color: black; font-weight: bold;">Donate</a>
            </li>
          </ul>
        </nav>

        <div class="imprint">
          <div class="left">© 2019. All rights reserved</div>
          <div class="right">Website by <a href="https://www.hannahpilbeam.co.uk" class="author">Hannah Pilbeam</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Survey from './components/Survey.vue'

export default {
  name: 'app',
  components: {
    Survey
  }
}
</script>

<style lang="scss" scoped>
  @import 'scss/_mixins.scss';

  .background {
    width: 100%;
    background: white;

    img {
      width: 100%;
      height: auto;
    }
  }

  .footer {
    margin-bottom: 50px;
    text-align: center;

    .footer-logo {
      margin: auto;
      width: 235px;
      height: auto;
    }

    .social-icons {
      margin-top: 40px;
    }

    @include breakpoint(xs) {
      margin-bottom: 30px;
      padding-top: 20px;
    }
  }
</style>
