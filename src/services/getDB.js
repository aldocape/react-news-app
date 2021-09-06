const { buscarUsuarioPorUserPass } = require("../../src/database");

export default function login(username, password) {
  const user = buscarUsuarioPorUserPass(username, password);

  if (user) {
    // Usuario válido
    return user;
    // const data = user.json();
    // return data;
  }

  return 0;
}
