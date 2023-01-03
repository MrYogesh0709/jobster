export const addToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const removeFromLocalStorage = () => {
  localStorage.removeItem("user");
};
export const getFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
