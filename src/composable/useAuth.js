import { ref } from "vue";

const isAuthenticated = ref(false);

const user = ref("");

const usersFromDB = [
  { username: "admin", password: "admin", name: "Administrator" },
  { username: "Edgar", password: "password", name: "edgar" },
];

const useAuth = () => {
  const login = (username, password) => {
    const user = username.find(
      (user) => user.username === username && user.password
    );

    if (user) {
      isAuthenticated.value = true;
      user.value = user.name;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = "";
  };

  return { isAuthenticated, login, logout, user };
};

export default useAuth;
