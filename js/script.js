// Fetch

let usersContainer = document.querySelector("aside")
let usersName = document.querySelectorAll(".info h1")

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(json => {
    for (names of json) {
        let users = `
        <div class="info" onclick="clicked(${names.id} , this)">
            <h1>${names.name}</h1>
            <p>${names.email}</p>
        </div>
        `
        usersContainer.innerHTML += users
    }

}) 

let postsContainer = document.querySelector(".right-side")

function getUserPosts(userID) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}/posts`)
    .then(response => response.json())
    .then((json) => {
        postsContainer.innerHTML = ""
        for (post of json) {
            let posts = `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
            `
            postsContainer.innerHTML += posts
        }
    })
}

function clicked(id, el) {
    getUserPosts(id)
    let selectedElements = document.querySelectorAll(".active")
    selectedElements.forEach(e => {
        e.classList.remove("active")
    })
    el.classList.add("active")
}