<template>
  <div class="home">
    
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <h3>{{ counter.title }}:</h3>

    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counter.count }}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <input
        v-model="counter.title"
        v-autofocus
        type="text"
      >
    </div>

  </div>
</template>

<script setup>
/*
  imports
*/

  import { ref, onMounted } from 'vue'
  import { useCounterStore } from '@/stores/counter'
  import { vAutofocus } from '@/directives/vAutofocus'

/*
  app title
*/

  const appTitle = 'My Ok Counter App'

  const appTitleRef = ref(null)

  onMounted(() => {
    console.log(`The app title is ${ appTitleRef.value.offsetWidth } px wide!`)
  })

/*
  counter
*/

  const counter = useCounterStore()

</script>

<!--
<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return 'my result'
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert('asdfasd')
    }
  },
  mounted() {
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted')
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>
-->

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}
.edit {
  margin-top: 60px;
}
</style>