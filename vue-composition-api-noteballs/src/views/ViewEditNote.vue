<template>
  <div class="edit-note">
    <AddEditNote
      v-model="noteContent"
      bgColor="link"
      placeholder="Edit note"
      label="Edit Note"
      ref="addEditNoteRef"
    >
      <template #buttons>
        <button
          @click="$router.back()"
          class="button is-link is-light"
        >
          Cancel
        </button>
        <button
          class="button is-link has-background-link"
          :disabled="!noteContent"
        >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>

/*
  imports
*/

  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { useStoreNotes } from '@/stores/storeNotes'

/*
  router
*/

  const route = useRoute()

/*
  store
*/

  const storeNotes = useStoreNotes()

/*
  note
*/

  const noteContent = ref('')

  console.log(route.params.id)

  noteContent.value = storeNotes.getNoteContent



</script>