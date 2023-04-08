import api from "./api";

export async function getTablesUser() {
  const user = localStorage.getItem("user");
  const { token } = JSON.parse(user);
  const auth = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  
  const response = await api.get("/table/user", auth);

  return response.data
}