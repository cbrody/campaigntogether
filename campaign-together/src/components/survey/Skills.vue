<template>
  <div class="question">
    <h1>What are you good at?</h1>
    <p class="intro">Select all that apply</p>
    <p class="error" v-if="showError">Please select at least one option</p>

    <InputButtons :buttons="skills" @selection:updated="(skills) => updateSkills(skills)" />

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
      selection: [],
      skills: [
        {name: 'I can give people a lift', icon: 'car'},
        {name: 'Talking to people', icon: 'phone'},
        {name: 'Talking on the phone', icon: 'talk'},
        {name: 'Giving help online', icon: 'online'},
        {name: 'Working in groups', icon: 'groups'},
        {name: 'Great with technology', icon: 'technology'},
        {name: 'Taking photos & videos', icon: 'video'}
      ],
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
    updateSkills(skills) {
      this.selection = skills;
      this.$emit('skills:updated', skills);
    }
  }
}
</script>
