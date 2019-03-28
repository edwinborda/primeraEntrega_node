let courses = [{
    id: 1,
    name: 'Fundamentos node js',
    duration: '30 horas',
    cost: '$500.000'
},{
    id: 2,
    name: 'Mongo db',
    duration: '30 horas',
    cost: '$550.000'
},
{
    id: 3,
    name: 'Typescript y angular 6',
    duration: '60 horas',
    cost: '$1.050.000'
}]

let listCourses = (callback) => {
    let index = 0;
        setInterval(() => {
            callback(courses[index++])
            if (index == courses.length) index = 0;
        }, 2000);
}
    
module.exports = {
    courses: courses,
    listCourses: listCourses
}