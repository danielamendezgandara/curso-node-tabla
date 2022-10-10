const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta) => {
  //return new Promise((resolve, reject) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= hasta; i++) {
      let valor = base * i;
      consola += `${colors.green(base)} ${colors.red("x")} ${colors.yellow(
        i
      )} ${colors.cyan("=")} ${colors.magenta(valor)}\n`;
      salida += `${base} x ${i} = ${valor}\n`;
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    if (listar) {
      console.log(colors.rainbow("==================="));
      console.log("Tabla del".green + " " + colors.blue(base));
      console.log(colors.rainbow("==================="));
      console.log(consola);
    }

    //resolve()
    //reject("No se puede crear el archivo");
    //});
    return colors.rainbow(`tabla-${base}.txt creado`);
    //};
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
