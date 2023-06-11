<script setup>

import RegistrationForm from '@/components/RegistrationForm.vue';
import PROVIDE from '@/constants/provides.js';
import {inject, ref} from 'vue';

const pb = inject(PROVIDE.PB);
const isSuccess = ref(false);

const onLogin = (dto) => {
  pb.collection('users').authWithPassword(
    dto.username,
    dto.password,

    // 'YOUR_USERNAME_OR_EMAIL',
    // 'YOUR_PASSWORD',
  ).then(() => {
    isSuccess.value = true;
  });
};

</script>
<template>
  <div 
    v-if="!isSuccess"
  >
    <RegistrationForm @login="onLogin" />
    <router-link to="ROUTES.SIGUP">
      Sign Up
    </router-link>
  </div>
  <div
    v-else
  >
  <div>You has been successfully login</div>
    <router-link to="ROUTES.INDEX">
      Home
    </router-link>
  </div>
</template>



