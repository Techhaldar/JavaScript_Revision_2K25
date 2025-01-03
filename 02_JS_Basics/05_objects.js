// Object de-structure and JSON 
const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor: "Ratin"
 }

// console.log(course.courseInstructor)
const {courseInstructor:Std_Name, courseName, price} = course
console.log(courseName);
console.log(price);
console.log(Std_Name);

//  {
//      "name" : "ratin Haldar",
//      "courseName" : "JavaScript in Hindi with Chai or code",
//      "price" : "Free"
//  }

// [
//     {},
//     {},
//     {}
// ]

