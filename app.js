require("colors");

const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquireMenu } = require("./helpers/inquirer");
const { pausa, leerInput } = require("./helpers/inquirer");
const Tarea = require("./models/tarea");
const Tareas = require("./models/tareas");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasdb = leerDB();

  if (tareasdb) {
    tareas.cargarTareasFromArray(tareasdb);
  }

  await pausa();
  do {
    opt = await inquireMenu();

    switch (opt) {
      case "1":
        const desc = await leerInput("descripción: ");
        tareas.crearTarea(desc);

        break;

      case "2":
        tareas.listadoCompleto();
        break;
    }

    guardarDB(tareas.listadoArr);

    await pausa();
  } while (opt !== "0");

  // pausa();
};

main();
