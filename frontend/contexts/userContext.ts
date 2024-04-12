import { provide, ref } from "vue";
import { jwtDecode } from "jwt-decode";
import type { UserContext, JwtPayload, userQuery } from "~/types/user.types";

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
  const user = ref<UserContext>({ username: "", id: 0, email: "" });

  const updateUser = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jwtDecode(token) as JwtPayload;
      const { id } = decodedToken;

      const getUserVariables = { getUserByIdId: id };

      const { data } = await useAsyncQuery<userQuery>(
        GET_USER,
        getUserVariables
      );

      user.value = await data?.value?.getUserById;
    }
  };

  const disconnectUser = () => {
    user.value = { username: "", id: 0, email: "" };
    localStorage.removeItem("token");
  };

  const ctx = {
    user,
    updateUser,
    disconnectUser,
  };

  provide("user", ctx);

  return ctx;
};
