const students = [
    {
        firstname: 'dawit',
        lastname: 'mekonnen',
        desc: 'fucking loser '
    },
    {
        firstname: 'nahom',
        lastname: 'bezin',
        desc: 'he sucks'
    }
]

function getStudents() {
    setTimeout(() => {
        let list = ''
        students.forEach((student) => {
            list += `<li>${student.desc}</li>`;
        });
        document.body.innerHTML = list;
    }, 1000);
}

function addStudent(student, callback) {
    setTimeout(() => {
        students.push(student);
        callback()
    }, 2000)
}



addStudent({
    firstname: 'eyuel',
    lastname: 'sahilu',
    desc: 'alcholic'
}, getStudents);
