<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script setup>
import parts from '../data/parts';
import { computed } from 'vue';

const props = defineProps(['partType', 'id']);
const part = computed(() => {
  return parts[props.partType].find(part => part.id === +props.id);
});
</script>
