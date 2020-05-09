const url = 'https://acme-users-api-rev.herokuapp.com/api/users';


// const firstDiv = document.querySelector('.first ul');
// const firstDiv = document.querySelector('.first ul');

fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
    const users = data.users;

    firstName(users);
    lastName(users);
    email(users);
    title(users);
})

const firstName = (arg) => {
    const firstDiv = document.querySelector('.first ul');
    const html = arg.map((index) => {
        const splitName = index.fullName.split(' ');
        const firstName = splitName[0];
        return `<li>${index.firstName}</li>`
    }).join('');
    firstDiv.innerHTML = html;
}

const lastName = (arg) => {
    const lastDiv = document.querySelector('.last ul');
    const html = arg.map((index) => {
        const splitName = index.fullName.split(' ');
        const lastName = splitName[1];
        return `<li>${index.lastName}</li>`
    }).join('');
    lastDiv.innerHTML = html;
}

const email = (arg) => {
    const emailDiv = document.querySelector('.email ul');
    const html = arg.map((index) => {
        const emailAddress = index.email;
        return `<li>${emailAddress}</li>`
    }).join('');
    emailDiv.innerHTML = html;
}

const title = (arg) => {
    const titleDiv = document.querySelector('.title ul');
    const html = arg.map((index) => {
        const title = index.title;
        return `<li>${title}</li>`
    }).join('');
    titleDiv.innerHTML = html;
}

const render = () => {
    
}
