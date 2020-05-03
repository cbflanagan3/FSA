const app = document.querySelector('#app');

const users = [
    {id: 1, name: 'moe', slot: 'second'},
    {id: 2, name: 'larry', slot: 'first'},
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












// disregard


// Tried adding the 'first, 'second', 'third' classes manually, still the same outcome...

// const boxes = document.querySelectorAll('.box');
// const userNames = document.querySelectorAll('.user');

// const boxClass = () => {
//     boxes[0].classList.add('first');
//     boxes[1].classList.add('second');
//     boxes[2].classList.add('third');
// }


// const setName = () => {
//     console.log(userNames[1].parentNode.classList.contains(users[1].slot));
//     for(let i=0;i<users.length;i++){
//         // console.log(users[i]);
//         for(let j=0;j<userNames.length;j++){
//             console.log(userNames[j]);
//             if(userNames[j].parentNode.classList.contains(users[i].slot)){
//                 userNames[j].innerText = users[i].name;
//             }
//         }
//     }
// }

// boxClass();
// setName();

// move up later


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
