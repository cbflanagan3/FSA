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

    const boxClass = ['first', 'second', 'third'];

    // for(let i=0;i<boxClass.length;i++){
        // }
        
    box.classList.add('box', arg.slot);
    leftArrow.classList.add('left', 'arrow');
    rightArrow.classList.add('right', 'arrow');
    user.classList.add('user');
    
    leftArrow.innerText = '<';
    rightArrow.innerText = '>';
    
    box.append(leftArrow);
    box.append(rightArrow);
    box.append(user);
    boxesContainer.append(box);

    if(box.classList.contains(arg.slot)){
        user.innerText = arg.name;
    }

    leftArrow.addEventListener('click', (event) => {
        arrowHandler(leftArrow, arg);
    });
    
    rightArrow.addEventListener('click', (event)=>{
        arrowHandler(rightArrow, arg);
    });

    nameHandler(user);
    return box;
}


// const arrowHandler = (el, arg) => {
//     const parentNode = el.parentNode;
//     const selected = document.querySelectorAll('.selected');
//     // const boxes = document.querySelectorAll('.box');

//     if(parentNode.classList.contains('first') && el.classList.contains('right')){
//         selected.forEach((index) => {
//             users.forEach((ind) => {
//                 if(index.innerText === ind.name){
//                     ind.slot = 'second';
//                     console.log(ind, ind.slot);
//                     render();
//                 }
//             });
//         });
//     } else if(parentNode.classList.contains('second') && el.classList.contains('right')){
//         selected.forEach((index) => {
//             users.forEach((ind) => {
//                 if(index.innerText === ind.name){
//                     ind.slot = 'third';
//                     console.log(ind, ind.slot);
//                     render();
//                 }
//             });
//         });
//     } else if(parentNode.classList.contains('third') && el.classList.contains('left')){
//         selected.forEach((index) => {
//             users.forEach((ind) => {
//                 if(index.innerText === ind.name){
//                     ind.slot = 'second';
//                     console.log(ind, ind.slot);
//                     render();
//                 }
//             });
//         });
//     } else if(parentNode.classList.contains('second') && el.classList.contains('left')){
//         selected.forEach((index) => {
//             users.forEach((ind) => {
//                 if(index.innerText === ind.name){
//                     ind.slot = 'first';
//                     console.log(ind, ind.slot);
//                     render();
//                 }
//             });
//         });
//     }


    // for(let j=0;j<selected.length;j++){
    //     for(let i=0;i<boxes.length;i++){
    //         if(arg.classList.contains('right')){
    //             boxes[i].append(selected[j]);
    //         } else {
    //             boxes[i-1].append()
    //         }        
    //     }
    // } 
    
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

    createHeader();
    createBoxesContainer();
    
    users.forEach((index)=>{
        createBox(index);
    })

}

render();