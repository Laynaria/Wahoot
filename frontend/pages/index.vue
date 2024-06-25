<script lang="ts" setup>
import { meta } from "~/services/meta";
import type { UserResults } from "~/types/user.types";

const GET_ALL_USERS = gql`
  query GetUsers {
    getUsers {
      email
      id
      password
      username
    }
  }
`;

const props = defineProps(["test"]);

if (props.test === undefined) {
  meta("Home", "en");
}

const { data, error } = await useLazyAsyncQuery<UserResults>(GET_ALL_USERS);
</script>

<template>
  <p>HOME</p>

  <p class="bg-red-400">TEST</p>

  <p v-if="error">You don't have authorization to see</p>

  <p v-if="!error">There are {{ data?.getUsers?.length || 0 }} users.</p>
  <p v-if="!error">{{ data?.getUsers[0].username }}</p>
  <p v-if="!error">{{ data?.getUsers[0].email }}</p>
  <p v-if="!error">{{ data?.getUsers[0].id }}</p>
</template>
