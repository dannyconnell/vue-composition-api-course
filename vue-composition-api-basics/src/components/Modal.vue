<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal"
    >
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
      <div>
        Username is: {{ userData.username }}
      </div>
    </div>
  </teleport>
</template>

<script setup>
/*
  imports
*/

  import { inject } from 'vue'

/*
  props
*/

  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'No title specified'
    }
  })

/*
  emits
*/

  const emit = defineEmits(['update:modelValue'])

/*
  user data
*/

  const userData = inject('userData')

</script>

<style>
.modal {
  background: beige;
  padding: 10px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>