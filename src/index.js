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