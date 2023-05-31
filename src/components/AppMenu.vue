<script setup>
defineProps({
  links: {
    type: Array,
    default: () => [],
    required: true
  }
});
</script>
<template>
  <div style="margin: 2rem 0px">
    <template
      v-for="menuItem in menuLinks"
      :key="menuItem.name"
    >
      <router-link
        v-if="menuItem.canRender"
        :to="menuItem.link"
      >
        {{ menuItem.name }}
      </router-link>
    </template>
  </div>
</template>

