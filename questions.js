const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 75 },
    { name: 'David', score: 95 },
    { name: 'Eva', score: 88 }
  ];
  
// average score
function avgscore(students){
    let c=0
    students.forEach(n => {
        c+=n.score
        
    });
    return c/students.length
}
console.log(avgscore(students))


  
  