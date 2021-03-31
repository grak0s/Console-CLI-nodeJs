const fs = require("fs");

const archivo = "./db/data.json";

const guardarDB = (data) => {
  const archivo = "./db/data.json";

  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const info = fs.readFileSync(archivo, { encoding: "utf-8" });
  const data = JSON.parse(info);

  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
