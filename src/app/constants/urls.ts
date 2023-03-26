import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  employees: `${API}/employees`,
  auth: `${API}/auth`,
  users: `${API}/users`
}
