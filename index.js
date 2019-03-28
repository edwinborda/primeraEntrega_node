const {courses, listCourses} = require('./listCourses');
const {register} = require('./registerCourse');

let options = {
    id : {
        demand: true,   
        alias: 'i'
    },
    name: {
        demand: false,
        alias: 'n'
    },
    cc: {
        demand: false,
        alias: 'c'
    }

}

const argv = require('yargs')
             // lista los cursos de extension
             .command ('listar', 'Listado de cursos de extensión T. de A.',{},
                (args) => {
                    listCourses(function(item){
                    console.log(item)
                });
             })
             // inscribe en los cursos de extension
             .command ('inscribir', 'inscribir de cursos de extensión T. de A.', options, 
                (args) => {
                    register(args.i, args.n, args.c);
                })
             .argv;

