class User {
    constructor (username, password) {
        this.username = username;
        this.password = password;
    }

    toJSON() {
        return JSON.stringify(this);
    }

    static fromJSON(jsonString) {
        const obj = JSON.parse(jsonString);
        return new User(obj.username, obj.password);
    }
}

class Post {
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    toJSON() {
        return JSON.stringify({
            title: this.title,
            content: this.content,
            author: this.author.username
        })
    }

    static fromJSON(jsonString) {
        const obj = JSON.parse(jsonString);
        return new Post(obj.title, obj.content, new User(obj.author, ""))
    }
}

const savePostsToLocalStorage = (posts) => {
localStorage.setItem('posts', JSON.stringify(posts.map(post => post.toJSON())));
}

const getPostsFromLocalStorage = () => {
const postsJSON = JSON.parse(localStorage.getItem('posts') || '[]');
return postsJSON.map(Post.fromJSON);
}

document.addEventListener("DOMContentLoaded", () => {
let users = [];

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Username already taken. Please choose another one.');
    } else {
        users.push({ username, email, password });
        alert('Signup successful! Please log in.');
    }
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.querySelector('.signup-container').style.display = 'none';
        document.querySelector('.login-container').style.display = 'none';
        document.getElementById('login-success').style.display = 'block';
        document.getElementById('user-name').textContent = user.username;
    } else {
        alert('Email or Password is incorrect.');
    }
});

document.getElementById('logout-button').addEventListener('click', function() {
    document.querySelector('.signup-container').style.display = 'block';
    document.querySelector('.login-container').style.display = 'block';
    document.getElementById('login-success').style.display = 'none';
});
});

let posts = [];

document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!loggedInUser) {
        alert('You must be logged in to create a post.');
        return;
    }

    const title = document.getElementById('post-title').value;
    const description = document.getElementById('post-description').value;

    const newPost = {
        title: title,
        description: description,
        author: loggedInUser.username,
        datePosted: new Date().toISOString() 
    };

    posts.push(newPost);

    document.getElementById('post-title').value = '';
    document.getElementById('post-description').value = '';

    displayPost(newPost);


    alert('Your post has been added!');
});

function displayPost(post) {
    const postsContainer = document.getElementById('posts-container');

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.description}</p>
        <small>Posted by ${post.author} on ${post.datePosted}</small>
    `;
    postsContainer.appendChild(postElement);
}
