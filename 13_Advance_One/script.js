const xhr = new XMLHttpRequest();
const requestUrl = "https://api.github.com/users/hiteshchoudhary"
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)

        // console.log(typeof data)
        // console.log(data.followers);
        document.querySelector("#cart").innerHTML = data.followers
        
    }
}
xhr.send()

