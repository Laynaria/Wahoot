export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
};

export type UserLogin = Omit<User, "username" | "id">;

export type UserRegister = Omit<User, "id">;

export type UserResults = {
  getUsers: [User];
};

export type UserContext = Omit<User, "password">;

export interface JwtPayload {
  id: number;
}

type userQuery = {
  getUserById: {
    email: string;
    id: number;
    username: string;
  };
};
