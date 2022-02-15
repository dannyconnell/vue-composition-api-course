<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${ bgColor }-dark`"
  >
    <label
      v-if="label"
      class="label has-text-white"
    >
      {{ label }}
    </label>

    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          :placeholder="placeholder"
          ref="textareaRef"
        />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>

/*
  imports
*/

  import { ref } from 'vue'

/*
  props
*/

  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      default: 'success'
    },
    placeholder: {
      type: String,
      default: 'Type something...'
    },
    label: {
      type: String
    }
  })

/*
  emits
*/

  const emit = defineEmits(['update:modelValue'])

/*
  focus textarea
*/

  const textareaRef = ref(null)

  const focusTextarea = () => {
    textareaRef.value.focus()
  }

  defineExpose({
    focusTextarea
  })

</script>