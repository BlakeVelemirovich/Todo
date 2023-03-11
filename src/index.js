import '../src/SCSS/styles.scss';

//Finished task
const checkButton = document.querySelector('.finished');
const checkContainer = document.querySelector('.check-button');
checkButton.addEventListener('click', function() {
    checkContainer.classList.toggle('checked');
});

//Add new task
const addButton = document.querySelector('.addButton');
addButton.addEventListener('click', function() {
    createNewTodo('todo');
});

//Remove task
const deleteButton = document.querySelector('.trash');
deleteButton.addEventListener('click', function() {
    this.parentNode.parentNode.remove();
});

//Edit feature
const editPopup = (name) => {
    
    const popup = document.querySelector('.edit-popup');
    popup.className = 'edit-popup-visible';

    const editField = document.createElement('div');
    editField.className = 'editField';

    let editName = document.createElement('textarea');
    editName.innerHTML = name;
    editField.appendChild(editName);
    
    const dateContainer = document.createElement('div');
    dateContainer.classList = 'dateContainer';
    let datePara = document.createElement('p');
    datePara.textContent = 'Select Date: ';
    dateContainer.appendChild(datePara);
    let selectDate = document.createElement('input');
    selectDate.type = 'date';
    dateContainer.appendChild(selectDate);
    editField.appendChild(dateContainer);

    const priorityContainer = document.createElement('div');
    priorityContainer.classList = 'priorityContainer';
    priorityContainer.appendChild(paraConstruct('Low'));
    priorityContainer.appendChild(paraConstruct('Medium'));
    priorityContainer.appendChild(paraConstruct('High'));

    editField.appendChild(createBtn('X'));

    const bottomDiv = document.createElement('div');
    bottomDiv.classList = 'bottomDiv';
    bottomDiv.appendChild(priorityContainer);
    bottomDiv.appendChild(createBtn('Confirm'));
    editField.appendChild(bottomDiv);

    popup.appendChild(editField);

}

//Button Constructor
const createBtn = (name) => {

    let btn = document.createElement('input');
    btn.classList = name;
    btn.value = name;
    btn.type = 'button';
    return btn;
}

//P element constructor function
const paraConstruct = (name) => {
    
    let pElement = document.createElement('p');
    pElement.innerText = name;
    return pElement;
}

//Todo constructor function
const createNewTodo = (name) => {

    let newTodo = document.createElement('button');
    newTodo.classList.add('check-button');
    
    let leftHalf = document.createElement('div');
    leftHalf.classList.add('leftHalf');

    let img = document.createElement('img');
    img.src = "../images/Coffee-Cup-Silhouette.svg";
    leftHalf.appendChild(img);
    
    let para = document.createElement('p');
    para.classList.add('name');
    para.innerHTML = name;
    leftHalf.appendChild(para);

    let rightHalf = document.createElement('div');
    rightHalf.classList.add('rightHalf');

    let date = document.createElement('p');
    date.classList.add('date');
    date.innerHTML = 'Date goes here';
    rightHalf.appendChild(date);

    let edit = document.createElement('p');
    edit.classList.add('edit');
    edit.innerHTML = 'Edit goes here';
    edit.addEventListener('click', function() {
        const nameValue = document.querySelector('.name').textContent;
        editPopup(nameValue);
    });
    rightHalf.appendChild(edit);

    let trash = document.createElement('p');
    trash.classList.add('trash');
    trash.innerHTML = 'Trash goes here';
    trash.addEventListener('click', function() {
        trash.parentNode.parentNode.remove();
    });
    rightHalf.appendChild(trash);

    newTodo.appendChild(leftHalf);
    newTodo.appendChild(rightHalf)

    const toDoContainer = document.querySelector('.todo');
    toDoContainer.appendChild(newTodo);
    toDoContainer.appendChild(newTodo);
}