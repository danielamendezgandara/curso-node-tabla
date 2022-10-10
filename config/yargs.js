const argv = require('yargs')
             .options('b',
             {
                alias : 'base',
                type:'number',
                demandOption : true,
                describe :'Es la base de multiplicar'
             })
             .options('l',
                {
                alias : 'listar',
                default : false,
                type : 'boolean',
                describe :'Muestra la tabla de multiplicar'
                })
             .options('h',
                {
                alias : 'hasta',
                type : 'number',
                default : 10,
                describe : 'Indica hasta donde la tabla de multiplicar'
                })
             .check((argv,options)=>{
                if(isNaN(argv.b)){
                  throw 'La base debe ser un número'
                }
                return true
             })
             .check((argv,options)=>{
                if(isNaN(argv.h)){
                  throw 'Debe ser un número'
                }
                return true
             })
             .argv;

module.exports = argv;