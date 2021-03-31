const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const preguntas =[
{
    type:'list',
    name:'opcion',
    message:'Que desea hacer?',
    choices:[
        {
            value:'1',
            name:`${'1'.yellow}. Crear tarea`
        },
        {
            value:'2',
            name:`${'2'.yellow}. Listar tarea`
        },
        {
            value:'3',
            name:`${'3'.yellow}. listar tareas completadas`
        },
        {
            value:'4',
            name:`${'4'.yellow}. listar tareas pendientes`
        },
        {
            value:'5',
            name:`${'5'.yellow}. Completar tareas`
        },
        {
            value:'0',
            name:`${'0'.yellow}. salir`
        },
        ]
}
];



const inquireMenu = async()=>{
    console.clear();
    console.log('========================'.green)
    console.log('seleccione una opción')
    console.log('========================\n'.green)

    const {opcion}  = await inquirer.prompt(preguntas);

    return opcion;

}

const pausa=async()=>{

    const questions=[
        {
            type:'input',
            name:'enter',
            message:`\nPresione ${'enter'.green} para opntinuar`
        }
    ];
    await inquirer.prompt(questions);

}

const leerInput = async(message)=>{
    const question =[
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if( value.length===0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} =await inquirer.prompt(question);
    return desc;
}


module.exports={
    inquireMenu,
    pausa,
    leerInput
}