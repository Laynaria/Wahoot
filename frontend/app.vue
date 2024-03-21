<script lang="ts" setup>
const query = gql`
  query getShips($limit: Int!) {
    ships(limit: $limit) {
      id
      name
    }
  }
`;

const variables = { limit: 5 };

const { data }: any = await useAsyncQuery(query, variables);
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
  <p class="bg-red-400">TEST</p>
  <p>There are {{ data?.ships?.length || 0 }} ships.</p>
</template>
