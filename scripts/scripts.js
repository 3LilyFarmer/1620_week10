let courseList = [
    {code: 'ACIT 1515' ,  course_name: 'Scripting for IT'},
    {code: 'ACIT 1620' ,  course_name: 'Web Fundamental Technologies'},
    {code: 'ACIT 1630' ,  course_name: 'Database Systems'}
];

let user_input;
do {
    user_input = prompt('Enter a 4 digit course code: ')
} while(isNaN(user_input) === true);
// alert(typeof(user_input))
// alert(user_input)
for(let item of courseList){
    if(item.code.includes(user_input)){
        alert(`Yes I am taking the course: ${item.code}: ${item.course_name}`);
        break;
    }
    else if(!item.code.includes(user_input)){
        courseList.push({code: user_input, course_name: null});
        alert(`Course ${user_input} has been added to course list`);
        break;
    }
}

// for(let item of courseList){
//     console.log(item.code.includes(1515))
//     console.log(item.code.includes(1620))
//     console.log(item.code.includes(1630))
//     console.log(item.code.includes(2000))
// }