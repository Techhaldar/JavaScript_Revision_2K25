// Immediately Invoked Function Expressions (IIFE)

// (function techhaldar(){
//     console.log(`DB Connnected`);

// })();

// ((name) => {
//     console.log(`DB Connected Two ${name}`);
// })('tech haldar')

(function chai() {
    console.log(`DB connected one`);
})();

(function techhaldar() {
    console.log(`DB Connected two`);
})()