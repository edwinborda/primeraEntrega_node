let {courses} = require('./listCourses');
const express = require('express');
const app = express();


let register = (id, name, cc) => {
    // buscar el curso
    let course = courses.find(i => {
        return i.id == id;
    })

    //genera una alerta en caso de no encontrar un id
    if(!course)
    {
        console.log('No Existe el id del curso');
        return;
    }
        
    //genera el archivo de texto con la informacion del curso y del estudiante
    text =  `El estudiante con el nombre ${name} con cédula de ciudadania ${cc} se inscribió al curso ${course.name} de duración ${course.duration} y con un precio de ${course.cost} \n`;
    
    app.get('/', function (req, res) {
        res.send(text)
      })
       
      app.listen(3000)
  
};

module.exports = {
    register: register
};