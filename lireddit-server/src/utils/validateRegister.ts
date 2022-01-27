import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message: "username must be atleast 2 characters long",
      },
    ];
  }
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot include @ in username",
      },
    ];
  }
  if (options.password.length < 6) {
    return [
      {
        field: "password",
        message: "password must be atleast 6 characters long",
      },
    ];
  }
  return null;
};
