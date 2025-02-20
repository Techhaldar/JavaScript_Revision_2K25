const requestUrl = 'https://api.github.com/users/techhaldar'

const cart = document.querySelector('#cart')
console.log(cart);

const xhr = new XMLHttpRequest();
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)
        const profile = document.createElement('img')
        profile.src = data.avatar_url;
        profile.alt = "Github profile picture";
        profile.style.width = '150px';
        profile.style.borderRadius = '50%';

        const followers = document.createElement('p')
        followers.textContent = `followers ${data.followers}`

        const following = document.createElement('p')
        following.textContent = `following ${data.following}`

        cart.appendChild(profile)
        cart.appendChild(followers)
        cart.appendChild(following)
    }
}
xhr.send()