<script lang="ts" setup>
import type { UserResults } from "~/types/user.types";
import * as NotifyService from "~/services/notify";

const { notifySuccess, notifyError, notifyInfo, notifyWarn } = NotifyService;

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
  <button @click="notifySuccess('Authentification')">Success</button>
  <button @click="notifyError('Authentification')">Error</button>
  <button @click="notifyInfo('Authentification')">Info</button>
  <button @click="notifyWarn('Authentification')">Warn</button>
</template>
