<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal"
    >
      <h1>{{ title }}</h1>
      <slot />
      <button @click="$emit('update:modelValue', false)">Hide modal</button>
    </div>
  </teleport>
</template>

<script setup>
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
  handle button click
*/

  // const handleButtonClick = () => {
  //   emit('update:modelValue', false)
  // }
</script>

<!-- 
<script>
export default {
  emits: ['hideModal'],
  props: {
    title: {
      type: String,
      default: 'No title specified'
    }
  }
}
</script>
 -->

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