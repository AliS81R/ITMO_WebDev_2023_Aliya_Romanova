<script setup>
import RegistrationForm from '@/components/RegistrationForm.vue';
import ROUTES from '@/constants/routes.js';
import { inject, ref } from 'vue';
import PROVIDE from '@/constants/provides.js';

const errors = ref([]);
const pb = inject(PROVIDE.PB);
const onRegister = (dto) => {
  console.log('>SignUpPage --onRegister:', dto);

  if(!dto.password || dto.password.length === 0) {
    errors.value =['Password required'];
  } else {
    pb.collation('users').create({
      username:dto.username,
      password:dto.password,
      passwordConfirm: dto.password,
    }).catch((error) => {
      const errorData = error.data.data;
      for(const item )
    })
  }
};

</script>
<template>
  <div>
    <RegistrationForm
      :registration="true"
      @register="onRegister"
    />
    <router-link to="ROUTES.SIGNUP">
      Sign Up
    </router-link>
  </div>
</template>