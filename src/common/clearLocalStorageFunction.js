export function clearSrorage() {
  localStorage.removeItem('token');
  localStorage.removeItem('activeID');
  sessionStorage.clear();
}