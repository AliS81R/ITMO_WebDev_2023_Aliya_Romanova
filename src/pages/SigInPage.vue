<script setup>

import RegistrationForm from '@/components/RegistrationForm.vue';
import PROVIDE from '@/constants/provides.js';

const pb = inject(PROVIDE.PB);
const onLogin = (dto) => {
  pb.collection('users').authWithPassword(
    'YOUR_USERNAME_OR_EMAIL',
    'YOUR_PASSWORD',
  ).then(() => {
  });
};

</script>
<template>
  <div>
    <RegistrationForm @login="onLogin" />
    <router-link to="ROUTES.SIGNIN">
      Sign In
    </router-link>
  </div>
</template>



