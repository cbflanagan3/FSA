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
    
    box.classList.add('box', arg);
    leftArrow.classList.add('left', 'arrow');
    rightArrow.classList.add('right', 'arrow');
    user.classList.add('user');
    
    leftArrow.innerText = '<';
    rightArrow.innerText = '>';
    
    box.append(leftArrow);
    box.append(rightArrow);
    box.append(user);
    boxesContainer.append(box);

    const boxes = document.querySelectorAll('.box');

    users.forEach((ind)=>{
        boxes.forEach((index)=>{
            if(index.classList.contains(ind.slot)){
                user.innerText = ind.name;
            } 
        });
    })

    leftArrow.addEventListener('click', ()=>{
        arrowHandler(leftArrow, arg);
    });
    
    rightArrow.addEventListener('click', ()=>{
        arrowHandler(rightArrow, arg);
    });

    nameHandler(user);
    return box;
}

// const arrowHandler = (el, arg) => {
//     const parentNode = el.parentNode;
//     const selected = document.querySelectorAll('.selected');
//     // const boxes = document.querySelectorAll('.box');
    

//     // selected.forEach((index) => {
//     //     console.log(index); 
//     //     users.forEach((ind) => {
//     //         console.log(ind.slot);
//     //         if(index.innerText === ind.name){
//     //             ind.slot = 'second';
//     //             render
//     //         }
//     //     });
//     // });

//     // for(let j=0;j<selected.length;j++){
//     //     for(let i=0;i<boxes.length;i++){
//     //         if(arg.classList.contains('right')){
//     //             boxes[i].append(selected[j]);
//     //         } else {
//     //             boxes[i-1].append()
//     //         }        
//     //     }
//     // } 
    
// }

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

    let order = ['first', 'second', 'third'];

    createHeader();
    createBoxesContainer();
    
    for(let i=0;i<order.length;i++){
        createBox(order[i]);
    }
    
    // users.forEach((index)=>{
    // })

}

render();