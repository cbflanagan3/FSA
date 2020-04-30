const app = document.querySelector("#app");

const createHeader = () =>{
    const headerContainer = document.createElement('div');
    const header = document.createElement('h1');

    headerContainer.classList.add('header-container');

    header.innerText = 'Acme Customers VIP';
    headerContainer.append(header);
    app.append(headerContainer);

    return headerContainer;
}

const createCustomers = (arg) =>{
    const customerContainer = document.createElement('div');
    const customer = document.createElement('div');

    customer.innerHTML = `${arg.name} joined on ${arg.dateJoined}`;
    customerContainer.classList.add('customer-container');

    if(arg.isVIP === true){
        customer.classList.add('vip-customer');
    } else {
        customer.classList.add('customer');
    }

    customerContainer.append(customer);
    app.append(customerContainer);

    return customerContainer;
}

const createForm = () => {

    const formContainer = document.createElement('div');
    const inputFormName = document.createElement('input');

    const labelName = document.createElement('label');
    labelName.innerText = 'Name';

    const inputFormDate = document.createElement('input');
    const labelDate = document.createElement('label');
    labelDate.innerText = 'Date';

    const createCheckbox = document.createElement('input');
    createCheckbox.setAttribute('type', 'checkbox');

    const checkboxLabel = document.createElement('label');
    checkboxLabel.innerHTML = 'VIP';

    const createButton = document.createElement('button');
    createButton.innerText = 'Create';

    inputFormName.addEventListener('input', (ev) =>{
        state.inputName = ev.target.value;
    });    

    inputFormDate.addEventListener('input', (ev) =>{
        state.inputDate = ev.target.value;
    });

    createCheckbox.addEventListener('change', (ev)=>{
        state.checked = true;
    });

    createButton.addEventListener('click', (ev)=>{
        ev.preventDefault();
        state.customers.push({
            id: state.customers.length+5, 
            name: state.inputName, 
            email: `${state.inputName}@gmail.com`, 
            isVIP: state.checked, 
            dateJoined: state.inputDate
        })
        
        console.log(state.customers);
        reset();
        render();
    });

    formContainer.classList.add('form');
    createButton.classList.add('button-class');
    checkboxLabel.classList.add('checkbox');
    inputFormDate.classList.add('input-form');
    inputFormName.classList.add('input-form');
    
    formContainer.append(labelName);
    formContainer.append(inputFormName);
    formContainer.append(labelDate);
    formContainer.append(inputFormDate);
    formContainer.append(checkboxLabel);
    formContainer.append(createCheckbox);
    formContainer.append(createButton);

    app.append(formContainer);

    return formContainer;
}

const state = {
    inputName: '',
    inputDate: '',
    checked: false,
    customers: [
        { id: 1, name: 'moe', email: 'moe@gmail.com', isVIP: true, dateJoined: '07/05/2015'},
        { id: 2, name: 'larry', isVIP: true, email: 'larry@gmail.com', dateJoined: '01/01/2019'},
        { id: 4, name: 'shep', email: 'shep@gmail.com', dateJoined: '03/19/2000'}
    ]
}

const render = () =>{
    app.innerHTML = '';

    createHeader();
    createForm();

    state.customers.forEach(function(index){
        createCustomers(index);
    });
}

render();

const reset = () =>{
    state.inputName = '',
    state.inputDate = '',
    state.checked = false;
}