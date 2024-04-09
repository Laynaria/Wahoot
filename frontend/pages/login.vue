<script lang="ts" setup>
import { jwtDecode } from "jwt-decode";
import type { JwtPayload, UserLogin } from "~/types/user.types";

const user = inject("user");

const LOGIN = gql`
  mutation LogIn($password: String!, $email: String!) {
    logIn(password: $password, email: $email)
  }
`;

const GET_USER = gql`
  query GetUserById($getUserByIdId: Float!) {
    getUserById(id: $getUserByIdId) {
      email
      id
      username
    }
  }
`;

const router = useRouter();

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

  const decodedToken = jwtDecode(res?.data?.logIn) as JwtPayload;
  const { id } = decodedToken;

  const getUserVariables = { getUserByIdId: id };

  const { data } = await useAsyncQuery(GET_USER, getUserVariables);

  user.value = await data?.value?.getUserById;

  router.push("/");
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
