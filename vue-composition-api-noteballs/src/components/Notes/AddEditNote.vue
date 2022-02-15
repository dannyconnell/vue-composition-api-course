<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          class="textarea"
          placeholder="Add a new note"
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