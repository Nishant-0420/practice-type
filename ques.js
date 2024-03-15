const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 75 },
    { name: 'David', score: 95 },
    { name: 'Eva', score: 88 }
  ];

  // get the names of those who got 90+
  function bright(){
   const g=students.filter(n=>n.score>90)
   return g.map(e=>e.name)
  }
  console.log(bright())
  
// average score
function avgscore(students){
    let c=0
    students.forEach(n => {
        c+=n.score
        
    });
    return c/students.length
}
console.log(avgscore(students))
// get names of those who got between 90-69
const n=students.filter(n=>n.score>69 && n.score<90)
console.log(n.map(n=>n.name))

const library = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { title: '1984', author: 'George Orwell', pages: 328 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 432 },
    { title: 'Moby Dick', author: 'Herman Melville', pages: 720 }
  ];

//   function to return book title with max pages.

function longestBook(library) {
    const pagesArray = library.map(book => book.pages); //map and filter can be used like this
    // map basically takes any particular value from object or array and transfer to other
    const maxPages = Math.max(...pagesArray);
    const longestBook = library.find(book => book.pages === maxPages);
    return longestBook.title;
}
console.log(longestBook(library));

// in above code we first take all pages value to other array with map and than take the max value from that 
// array with this max value i filter that object with max pages and then from that i return book title.


const student = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 75 },
  { name: 'David', score: 95 },
  { name: 'Eva', score: 88 }
];

// get the names of those who got 90+
function bright(){
 const g=student.filter(n=>n.score>69)
 return g.map(e=>e.name)
}
console.log(bright())

