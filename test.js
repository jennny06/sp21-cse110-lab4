let student = {
    name: 's',
    major: 'cs',
    'grad year': '2022',
    greeting: function() {
        console.log('Hello!');},
    'fav teacher': {
        names: 'TP',
        course: 'cse110'
    },
    courseLoad:['cse110', 'cse140']
};

//console.log(student.name);
//console.log(student['grad year']);
//student.greeting()
//console.log(student['fav teacher'].names)
console.log(student.courseLoad[1])