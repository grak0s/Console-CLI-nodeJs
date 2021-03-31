const { v4: uuidv4 } = require('uuid');

class Tarea{

    id='';
    desc ='';
    completado = null;

    constructor( desc ){
        this.id = uuidv4();
        this.desc = desc;
        this.completado=null;
       }
}

module.exports= Tarea;