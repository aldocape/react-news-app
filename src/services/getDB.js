const { buscarUsuarioPorUserPass } = require("../../src/database");

export default function login(username, password) {
  const user = buscarUsuarioPorUserPass(username, password);

  console.log(username);
  console.log(password);

  if (user) {
    // Usuario válido
    return user;
    // const data = user.json();
    // return data;
  }

  return 0;
}
