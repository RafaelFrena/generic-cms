<script lang="ts">
import { useCounterStore } from "../../repository/stores/counter";
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const counter = useCounterStore();

    return {
      counter
    }
  }
});
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ counter.counter }}</h2>
    <button @click="counter.increment">Increment</button>
  </div>
</template>

<style>
</style>
