// method - 1
//  document.getElementById('photoshop1').onclick = function(){
//      alert('First clicked')
//  }

// document.getElementById('photoshop4').addEventListener('click', function(){
//     alert("clicked again");
// })


// document.querySelector('#photoshop2').addEventListener('click', function(e){

//     console.log(e)
// })

// type, timestamp,  defaultPrevented, target, srcElement, currentTarget, clientX, clientY, ScreenX, ScreenY, altKey, Ctrkey, shiftkey, keyCode, 

// document.getElementById('photoshop3').addEventListener('click', function(e){
//     console.log('photo 3 clicked');

// }, false)

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("image clicked")
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.parentNode);
    if()
    let removeIt = e.target.parentNode
    removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
})