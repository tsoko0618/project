const pool = require('./connection');

async function  getStudents(){
    const[students] = await pool.query('select * from student',)
    return students
}

async function addStudents(name){
    const data = await pool.query(`insert into student(student) VALUE('${name}')`)
    return students
}
module.exports = {
    getStudents,
    addStudents

}
