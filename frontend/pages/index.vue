<script lang="ts" setup>
const query = gql`
  query GetUsers {
    getUsers {
      email
      id
      password
      username
    }
  }
`;

type User = {
  id: number;
  email: string;
  password: string;
  username: string;
};

type UserResults = {
  getUsers: [User];
};

const { data } = await useLazyAsyncQuery<UserResults>(query);
</script>

<template>
  <p>HOME</p>

  <p class="bg-red-400">TEST</p>
  <p>There are {{ data?.getUsers?.length || 0 }} users.</p>
  <p>{{ data?.getUsers[0].username }}</p>
  <p>{{ data?.getUsers[0].email }}</p>
  <p>{{ data?.getUsers[0].id }}</p>
</template>
