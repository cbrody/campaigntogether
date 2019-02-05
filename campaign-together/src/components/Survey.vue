<template>
  <div class="survey">
    <div v-if="finished">
      <Finish :first-name="this.data.firstName" />
    </div>
    <div v-else>
      <div class="progress-bar">
        <div class="bar"></div>
        <div
          class="step"
          v-for="(step, index) in steps"
          v-bind:key="step"
        >
          <div
            class="circle"
            v-bind:class="{'filled': progressStep >= index}"
          ></div>
          <div class="bar" v-if="step !== 'details'">
            <div class="line" v-bind:class="{'filled': progressStep > index}"></div>
          </div>
        </div>
      </div>

      <Issues v-show="step === 'issues'" @issues:updated="(data) => updateField('issues', data)" @next="next" />
      <Skills v-if="step === 'skills'" @skills:updated="(data) => updateField('skills', data)" @next="next" />
      <Postcode
        v-if="step === 'postcode'"
        @location:updated="(postcode, distance) => {
          updateField('postcode', postcode);
          updateField('distance', distance);
        }"
        @next="next"
      />
      <Availability v-if="step === 'availability'" @next="next" />
      <Donate v-if="step === 'donate'" @next="next" @donated="donated" />
      <Details v-show="step === 'details'" @details:updated="
        (firstName, lastName, email, phoneNumber) => {
          updateField('firstName', firstName);
          updateField('lastName', lastName);
          updateField('email', email);
          updateField('phoneNumber', phoneNumber);
        }
      " @next="submit"
      :donated="donated" />
    </div>
  </div>
</template>

<script>
import Details from './survey/Details.vue';
import Issues from './survey/Issues.vue';
import Skills from './survey/Skills.vue';
import Postcode from './survey/Postcode.vue';
import Availability from './survey/Availability.vue';
import Donate from './survey/Donate.vue';
import Finish from './survey/Finish.vue';

export default {
  computed: {
    nextButtonText() {
      return this.step !== 'details' ? 'Next' : 'Done';
    },
    progressStep() {
      return this.steps.indexOf(this.step);
    }
  },
  components: {
    Issues,
    Skills,
    Postcode,
    Availability,
    Donate,
    Details,
    Finish
  },
  data() {
    return {
      data: {},
      donated: false,
      finished: false,
      step: 'issues',
      steps: [
        'issues',
        'skills',
        'postcode',
        'availability',
        'donate',
        'details'
      ]
    }
  },
  methods: {
    donated() {
      this.donated = true;
    },
    next() {
      var current = this.steps.indexOf(this.step);
      var next = this.steps[current + 1];
      this.step = next;
      window.scrollTo(0, 0);
    },
    submit() {
      var __this = this;
      $.ajax({
        method: 'POST',
        url: 'https://gyycr4ld2a.execute-api.eu-west-1.amazonaws.com/Production/people',
        data: JSON.stringify(this.data)
      }).always(function() {
        __this.finished = true;
      });
    },
    updateField(field, data) {
      this.data[field] = data;
    }
  }
}
</script>
