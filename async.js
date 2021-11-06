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

function addStudent(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student);
            err = true;
            if (!err) {
                resolve();
            } else {
                reject('err:somthing went wrong')
            }
        }, 2000)
    })

}

async function excute(){
   await addStudent({
        firstname:'eyuel',
        lastname:'sahilu',
        desc:'alcholic'
    });
    getStudents();
}

excute();