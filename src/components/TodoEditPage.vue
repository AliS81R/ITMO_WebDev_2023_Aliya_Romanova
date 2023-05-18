<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";


const router = useRouter();
const route = useRoute();

const status = ref(route.query.status);
const onSelectChange = ({ target }) => {
  console.log('> TodoEditPage -> onSelectChange: ', target.value);
  status.value = target.value;
  router.replace({ ...route, query: { status: status.value } });
};
const onMounted = () => {
  console.log('route.params.id ->', route.params.id);
};

</script>
<template>
  <div>
    Todo Edit Page {{ route.params.id }}
  </div>
  <select
    name="status"
    @change="onSelectChange"
  >
    <option
      v-if="!status"
      value="unselected"
      selected
    >
      Unselected
    </option>
    <option
      v-for="item in ['Ready', 'Start', 'Stop']"
      :key="item"
      :value="item"
      :selected="item === status"
    >
      {{ item }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'TodoEditPage',
};
</script>


