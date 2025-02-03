// Object de-structure and JSON 
const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor: "Hitesh"
}

//  course.courseInstructor
const { courseInstructor, coursename, price } = course

// console.log(courseInstructor);
// console.log(coursename);
// console.log(price);

// API Structure
{
    "name" : "hitesh",
        "coursename" : "JavaScript",
            "price" : "free",
}

[
    {},
    {},
    {}
]