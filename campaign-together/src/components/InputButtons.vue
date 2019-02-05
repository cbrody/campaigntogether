<template>
  <div class="input-buttons">
    <div class="input-button" v-bind:key="button.name" v-for="button in buttons">
      <button class="btn" v-bind:class="{'selected': isSelected(button.name)}" @click="toggleButton(button.name)">
        <img v-if="isSelected(button)" :src="require(`@/assets/icons/${button.icon}-white.svg`)" />
        <img v-else :src="`/assets/img/icons/${button.icon}.svg`" />
        {{button.name}}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'buttons'
  ],
  data() {
    return {
      selected: []
    }
  },
  methods: {
    isSelected(button) {
      return this.selected.indexOf(button) !== -1;
    },
    toggleButton(button) {
      var index = this.selected.indexOf(button);
      if (index === -1) {
        this.selected.push(button);
      }
      else {
        this.selected.splice(index, 1);
      }

      this.$emit('selection:updated', this.selected);
    }
  }
}
</script>
