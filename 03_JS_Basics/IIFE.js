// Immediately Invoked Function Expressions (IIFE)

(function techhaldar(){
    console.log(`DB Connnected`);

})();

((name) => {
    console.log(`DB Connected Two ${name}`);
})('tech haldar')