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

export type InjectContext = {
  user: UserContext;
  updateUser: () => void;
  disconnectUser: () => void;
};

export type userQuery = {
  getUserById: {
    email: string;
    id: number;
    username: string;
  };
};

export interface JwtPayload {
  id: number;
}
