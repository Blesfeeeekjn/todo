export function saveLoginDataFunction(token, activeID) {
  localStorage.setItem("token", token)
  localStorage.setItem("activeID", activeID)
}