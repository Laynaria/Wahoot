<script lang="ts" setup>
import type { UserRegister } from "~/types/user.types";

import * as NotifyService from "~/services/notify";

const { notifySuccess } = NotifyService;

const REGISTER = gql`
  mutation Register($password: String!, $username: String!, $email: String!) {
    register(password: $password, username: $username, email: $email) {
      email
      id
      username
    }
  }
`;

const router = useRouter();

const variables = ref<UserRegister>({
  email: "",
  username: "",
  password: "",
});

const { mutate } = useMutation(REGISTER, {
  variables: variables.value,
});

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  await mutate();
  await router.push("/login");

  notifySuccess("Register");
};
</script>

<template>
  <h1>Register</h1>

  <form class="flex flex-col gap-4">
    <label for="username">
      Username:
      <input v-model="variables.username" name="username" />
    </label>
    <label for="email">
      Email:
      <input v-model="variables.email" name="email" />
    </label>
    <label for="password">
      Password:
      <input v-model="variables.password" name="password" />
    </label>
    <button @click="(e) => handleSubmit(e)">Register</button>
  </form>
</template>
