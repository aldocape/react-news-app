// const mysql = require("mysql");
// const { DB_CONFIG } = require("./config");

export function buscarUsuarioPorUserPass(username, password) {
  // conexión a la base de datos, con la configuración guardada en config.js
  // const connection = mysql.createConnection(DB_CONFIG);
  // connection.connect();

  // const [usuario] = connection.query(
  //   "SELECT * FROM usuarios WHERE username = ? AND pass = ?",
  //   [username, password]
  // );

  const usuario = [
    {
      dni_usuario: "12345678",
      nombre_apellido: username,
      localidad: "General Roca",
    },
  ];

  if (usuario.length) {
    return usuario[0];
  } else {
    return undefined;
  }
}
