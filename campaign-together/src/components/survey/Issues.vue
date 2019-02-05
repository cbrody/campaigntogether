<template>
  <div class="question">
    <h1>Why do you want to stop the Tories winning the next election?</h1>
    <p class="intro">Select all that apply</p>
    <p class="error" v-if="showError">Please select at least one option</p>

    <InputButtons :buttons="issues" @selection:updated="(issues) => updateIssues(issues)" />

    <button class="btn btn-black next" @click="save()">Next</button>
  </div>
</template>

<script>
import InputButtons from '../InputButtons.vue';

export default {
  components: {
    InputButtons
  },
  data() {
    return {
      issues: [
        {name: 'Protect public services', icon: 'public-services'},
        {name: 'Advance LGBT rights', icon: 'LGBTQ'},
        {name: 'Save our environment', icon: 'environment'},
        {name: 'For fairer voting', icon: 'voting'},
        {name: 'Advance racial justice', icon: 'justice'},
        {name: "Advance migrants' rights", icon: 'migrant-rights'},
        {name: 'A better deal for Brexit', icon: 'brexit'}
      ],
      selection: [],
      showError: false
    }
  },
  methods: {
    save() {
      if (this.selection.length === 0) {
        this.showError = true;
      }
      else {
        this.$emit('next');
      }
    },
    updateIssues(issues) {
      this.selection = issues;
      this.$emit('issues:updated', issues);
    }
  }
}
</script>

<style lang="scss">

</style>
