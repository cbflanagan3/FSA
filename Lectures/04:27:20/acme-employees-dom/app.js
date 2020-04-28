const app = document.querySelector('#app');

const createHeader = () => {
    const headerContainer = document.createElement('div');
    const header = document.createElement('h1');
    header.innerText = 'Acme Employees DOM';

    headerContainer.appendChild(header);
    app.appendChild(header);

    return headerContainer;
}

const subHeader = () => {
    const subHeaderContainer = document.createElement('div');
    const subHeader = document.createElement('h2');
    subHeader.innerText = 'Acme Employees DOM';

    subHeaderContainer.appendChild(subHeader);
    app.appendChild(subHeaderContainer);

    return subHeaderContainer;
}

const mainContent = () => {
    const boxContainer = document.createElement('div');
    boxContainer.classList.add('box-container');

    app.appendChild(boxContainer);
    return boxContainer;
}

const boxMaker = (name, id) => {
    const box = document.createElement('div');
    box.classList.add('box');

    let fav = false;

    const text = document.createElement('span');
    text.classList.add('name');

    text.innerText = name;
    box.appendChild(text);
    
    box.addEventListener('click', function(){
        // this[favorite] = !this.favorite;
        if(this.counter > 3){
            throw new Error();
        } else {
            favorite(this);
            fav = !fav;
            if(!fav){
                this.counter++;
            } else {
                this.counter--;
            }
        }
    });

    return box;
}

const favorite = (arg) =>{

    arg.classList.toggle('favorite');
    console.log(arg);
}

const employees = [
    { id: 1, name: 'moe'},
    { id: 2, name: 'larry'},
    { id: 4, name: 'shep'},
    { id: 3, name: 'curly'},
    { id: 5, name: 'groucho'},
    { id: 6, name: 'harpo'},
    { id: 8, name: 'shep Jr.'},
    { id: 99, name: 'lucy'}
  ];

const state = {
    employees,
    counter: 0
}

  const render = () => {
    app.innerHTML = '';

    createHeader();
    subHeader();
    mainContent();

    for(let i=0;i<state.employees.length;i++){
        let employee = state.employees[i];
        mainContent().appendChild(boxMaker(employee.name, employee.id));
    }

    // if(document.querySelectorAll('.favorite').length === 1){ 
    //     console.log('test');
    // }

  }

  render();