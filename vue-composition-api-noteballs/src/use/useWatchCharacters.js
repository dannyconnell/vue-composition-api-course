import { watch } from 'vue'

export function useWatchCharacters(valueToWatch) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === 100) {
      alert('Only 100 characters allowed gosh darnit!')
    }
  })
}