export function checkLoginFunction() {
  const checkToken = !!localStorage.getItem('token');
  const checkID = !!localStorage.getItem('activeID');
  return checkToken && checkID
}