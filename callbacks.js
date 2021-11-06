const students= [
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
       document.body.innerHTML=list;
    }, 1000);
}

getStudents();