<template>
  <div class="modals">
    <h1>Modals</h1>
    <button @click="showModal = true">Show modal</button>
    <Modal
      v-if="showModal"
      title="My modal title (via prop)"
    >
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa laboriosam vero natus ut rerum quaerat, saepe praesentium tempore et hic velit odio nemo minus labore quam ullam quod architecto?</p>
    </Modal>
  </div>
</template>

<script setup>
/*
  imports
*/

  import { ref } from 'vue'
  import Modal from '@/components/Modal.vue'

/*
  modals
*/

  const showModal = ref(false)

</script>

<!--
<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  }
}
</script>
-->