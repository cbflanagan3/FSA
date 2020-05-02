const app = document.querySelector('#app');

const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true}                    
];


const create = (type) => { return document.createElement(type) }

const createHeader = () => {
    const header = create('h1');
    
    app.append(header);

    header.innerText = 'Acme First, Second, Third';

    return header;
}

const createBoxesContainer = () => {
    const boxesContainer = create('div');
    
    boxesContainer.classList.add('boxes-container');
    
    app.append(boxesContainer);
    
    return boxesContainer;
}

const createBox = (arg) => {
    const boxesContainer = document.querySelector('.boxes-container');

    const box = create('div');
    const leftArrow = create('button');
    const rightArrow = create('button');
    const user = create('p');    
    
    box.classList.add(arg.slot);
    leftArrow.classList.add('left-arrow', 'arrow');
    rightArrow.classList.add('right-arrow', 'arrow');
    user.classList.add('user');
    
    leftArrow.innerText = '<';
    rightArrow.innerText = '>';

    user.innerText = arg.name;
    
    box.append(leftArrow);
    box.append(rightArrow);
    box.append(user);
    boxesContainer.append(box);
    
    leftArrow.addEventListener('click', ()=>{
        arrowHandler(leftArrow);
    });

    rightArrow.addEventListener('click', ()=>{
        arrowHandler(rightArrow);
    });

    nameHandler(user);

    return box;
}

const arrowHandler = (arg) => {
    const parentNode = arg.parentNode;
    const order = ['first', 'second', 'third'];
}

const nameHandler = (arg) => {
    arg.addEventListener('click', function(){
        users.forEach((index)=>{
            if(this.innerText === index.name){
                this.classList.toggle('selected');
                index.selected = !index.selected;
                console.log(index, this);
            }
        });
    });
}


const render = () => {
    app.innerHTML = '';

    createHeader();
    createBoxesContainer();

    for(i=0;i<users.length;i++){
        createBox(users[i]);
    };
}

render();