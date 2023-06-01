<script setup>
import RegistrationForm from '@/components/RegistrationForm.vue';
import ROUTES from '@/constants/routes.js';
import { inject, ref } from 'vue';
import PROVIDE from '@/constants/provides.js';
import router from '@/route.js';

const errors = ref([]);
const pb = inject(PROVIDE.PB);
const onRegister = (dto) => {
  console.log('>SignUpPage --onRegister:', dto);

  if (!dto.password || dto.password.length === 0) {
    errors.value = ["Password required"];
  } else {
    pb.collation("users").create({
      username: dto.username,
      password: dto.password,
      passwordConfirm: dto.password
    }).than((record) => {
      console.log("SignUpPage onRegister: result = ", record);
      if (window.confirm(`User created with ID: ${record.id}`)) {
        router.replace({ path: ROUTES.INDEX });
      }
    }).catch((error) => {
      console.log("SignUpPage onRegister: error = ", { error, errorData);
      if (errorData) {
        const errorData = error.data.data;
        for (const item in errorData) {
          const data = errorData[item];
          console.log(">item", data);
          errors.value.push(data.message);

        }
      else
        {
          errors.value.push(error.message);
        }
      }
    })
      ;
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