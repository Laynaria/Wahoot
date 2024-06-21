import { provide, ref } from "vue";
import { jwtDecode } from "jwt-decode";
import type { UserContext, JwtPayload, userQuery } from "~/types/user.types";

import * as NotifyService from "~/services/notify";

const { notifySuccess, notifyInfo } = NotifyService;

const GET_USER = gql`
  query GetUserById($getUserByIdId: Float!) {
    getUserById(id: $getUserByIdId) {
      email
      id
      username
    }
  }
`;

export const useUserContext = () => {
  const user = ref<UserContext | undefined>({ username: "", id: 0, email: "" });

  const updateUser = async (isCalled: boolean = false) => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken: JwtPayload = jwtDecode(token);
      const { id } = decodedToken;

      const getUserVariables = { getUserByIdId: id };

      const { data } = await useAsyncQuery<userQuery>(
        GET_USER,
        getUserVariables
      );

      user.value = await data?.value?.getUserById;

      await navigateTo("/");

      if (isCalled) {
        notifySuccess("Login");
      }
    }
  };

  const disconnectUser = async () => {
    user.value = { username: "", id: 0, email: "" };
    localStorage.removeItem("token");

    await navigateTo("/login");

    notifyInfo("Disconnected!");
    // reloadNuxtApp();
  };

  const ctx = {
    user,
    updateUser,
    disconnectUser,
  };

  provide("user", ctx);

  updateUser();
  return ctx;
};
