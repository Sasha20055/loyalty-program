import { instanse } from "./api";

export const authApi = {
  authAPi() {
    return instanse.get('auth')
      .then(res => {return res.data})
  }
}