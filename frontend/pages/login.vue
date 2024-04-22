<script lang="ts" setup>
import type { InjectContext, UserLogin } from "~/types/user.types";

const { updateUser } = inject("user") as InjectContext;

const LOGIN = gql`
  mutation LogIn($password: String!, $email: String!) {
    logIn(password: $password, email: $email)
  }
`;

const variables = ref<UserLogin>({
  email: "",
  password: "",
});

const { mutate } = useMutation(LOGIN, {
  variables: variables.value,
});

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  const res = await mutate();

  localStorage.setItem("token", res?.data?.logIn);

  updateUser();
};
</script>

<template>
  <h1>Login</h1>

  <label for="email">
    Email:
    <input v-model="variables.email" name="email" />
  </label>
  <label for="password">
    Password:
    <input v-model="variables.password" name="password" />
  </label>
  <button @click="(e) => handleSubmit(e)">LogIn</button>
</template>
