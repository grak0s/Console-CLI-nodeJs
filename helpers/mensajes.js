const { resolve } = require('path');

require('colors');

const mostrarMenu= ()=>{

    return new Promise((resolve =>{

        console.clear();
        console.log('========================'.green)
        console.log('seleccione una opción'.green)
        console.log('========================\n'.green)
    
    console.log(`${'1.'.green} Crear una Tarea`);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas contempladas`);
    console.log(`${'4.'.green} lostar pendientes tareas`);
    console.log(`${'5.'.green} completar tareas`);
    console.log(`${'6.'.green} borrar tareas`);
    console.log(`${'0.'.green} salir\n`);
    
    const readline = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    });
    
    readline.question('Seleccione una opción; ', (opt)=>{
     
        readline.close();
        resolve(opt);
    })
    }));



}

const pausa =()=>{

    return new Promise((resolve=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        });
        
        readline.question(`\nPresione ${'Enter'.blue} para continuar\n`, (opt)=>{
            readline.close();
            resolve();
        })
    }))
    
}


module.exports={
    mostrarMenu,
    pausa

}