const app = document.querySelector('#app');
const boxes = document.querySelectorAll('#lists > *');

const slots = ['first', 'second', 'third']; // didn't use this...

const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true}                    
];

const create = (type) => { return document.createElement(type) }

const updateBox = (arg) => {

    const leftButton = createButtons()[0];
    const rightButton = createButtons()[1];
    
    const boxId = arg.id;
    
    arg.append(leftButton);
    arg.append(rightButton);
    
    users.forEach((index) => {
        const userName = createName(); // THANK YOU
        if(index.slot === boxId){
            userName.innerText = index.name;
            arg.append(userName);
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
        users.forEach((ind) => {
            if(ind.selected === true){
                if(ind.slot === 'first'){
                    ind.slot = 'second';
                } else if(ind.slot === 'second'){
                    ind.slot = 'third';
                } 
                render();
            }
        });
        render();
    }

    if(arg.className === 'left'){
        users.forEach((ind) => {
            if(ind.selected === true){
                if(ind.slot === 'third'){
                    ind.slot = 'second';
                } else if(ind.slot === 'second'){
                    ind.slot = 'first';
                } 
                render();
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