const app = document.querySelector('#app');

const boxes = document.querySelectorAll('#lists > *');

const slots = ['first', 'second', 'third']; // didn't use this...

const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true} //if there are two of the same name (e.g. two 'lucy's, then both won't be selectable..                   
];

const create = (type) => { return document.createElement(type) }

const updateBox = (arg) => {

    const leftButton = createButtons()[0];
    const rightButton = createButtons()[1];
    
    arg.append(leftButton);
    arg.append(rightButton);
    
    users.forEach((index) => {
        const userName = createName(); // THANK YOU
        if(index.slot === arg.id){
            arg.append(userName);
            userName.innerText = index.name;
            selection(userName);
        }
    });
}

const createButtons = () => {

    const leftButton = create('button');
    const rightButton = create('button');
    
    leftButton.classList.add('left');
    rightButton.classList.add('right');    

    leftButton.innerText = '<';
    rightButton.innerText = '>';

    leftButton.addEventListener('click', (event) => {
        event.stopPropagation();
        buttonHandler(leftButton);
    });
    
    rightButton.addEventListener('click', (event) => {
        event.stopPropagation();
        buttonHandler(rightButton);
    });
    
    return [leftButton, rightButton];

}

const createName = () => {
    const user = create('p');

    user.classList.add('user');

    return user;
}

const selection = (arg) => {

    const selected = document.querySelectorAll('.selected');

    users.forEach((index) => {
        if(index.selected === true){
            if(arg.parentNode.id === index.slot && index.name === arg.innerText){
            arg.classList.toggle('selected');
            }
        } 
    });

    arg.addEventListener('click', function(){
        users.forEach((index) => {
            if(index.name === arg.innerText){
                index.selected = !index.selected;
                this.classList.toggle('selected');
                render();
            }    
        })
    });   
}

const buttonHandler = (arg) => {

    const selected = document.querySelectorAll('.selected');

    if(arg.className === 'right'){
        users.forEach((index) => {
            if(index.selected === true && arg.parentNode.id === index.slot){
                if(index.slot === 'first'){
                    index.slot = 'second';
                } else if(index.slot === 'second'){
                    index.slot = 'third';
                } else {
                    return;
                }
            }
        });
        render();
    }

    if(arg.className === 'left'){
        users.forEach((index) => {
            if(index.selected === true && arg.parentNode.id === index.slot){
                if(index.slot === 'third'){
                    index.slot = 'second';
                } else if(index.slot === 'second'){
                    index.slot = 'first';
                } else {
                    return;
                }
            }
        });
        render();
    }

}

const render = () => {
    boxes.forEach((box)=>{
        box.innerHTML = '';
        updateBox(box);
    })
}

render();

const html = document.querySelector('html');

html.addEventListener('mouseover', (event) => { //sorry for the eye sore
    let x = event.clientX;
    let y = event.clientY;

    let r = Math.ceil(Math.random() * 150) + 100;
    let g = Math.ceil(Math.random() * 150) + 100;
    let b = Math.ceil(Math.random() * 150) + 100;

    if(r%25 ===0 || g%25===0 || b%25===0){
        html.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    }

});