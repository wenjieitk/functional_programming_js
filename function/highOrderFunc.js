const greet = (greeting) => { //run this closure 1 time
    return (friend) => { //this closure run multiple times
        return `${greeting} ${friend}` //this clousure run 1 time
    }
}

const friends = ['sing','ling','nicole','beatrice','waner','peiyu']

const friendGreetings = friends.map(greet('good morning!'))

console.log(friendGreetings)

/** test */

// create the code to go from studentGrades array, to studentFeedback (as shown in comments below)
const studentGrades = [ 
    {name: 'Joe', grade: 88},
    {name: 'Jen', grade: 94},
    {name: 'Steph', grade: 77},
    {name: 'Allen', grade: 60},
    {name: 'Gina', grade: 54},
]
  
const feedbacks = {
    a: 'Excellent Job',
    b: 'Nice Job',
    c: 'Well done',
    d: 'What happened',
    f: 'Not good',
}
  
/*
const studentFeedback = [
'Nice Job Joe, you got an b',
'Excellent Job Jen, you got an a',
'Well done Steph, you got an c',
'What happened Allen, you got an d',
'Not good Gina, you got an f',
]; 
*/
const getGrade = (points) => {
    if(points >= 90){
      return 'A';
    } else if (points >= 80){
      return 'B'; 
    } else if (points >= 70){
      return 'C'; 
    } else if (points >= 60){
      return 'D'; 
    } else {
      return 'F'; 
    }
}

const getFeedback = (feedbacks) => {
    return (student) => {
        const grade = getGrade(student.grade)
        const feedback = feedbacks[grade]
        return `${feedback}, you got an ${grade}`
    }
}

const studentFeedbacks = studentGrades.map(getFeedback(feedbacks))  
console.log(studentFeedbacks)