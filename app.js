const actionButton = document.querySelector('.add');
const input = document.querySelector('.deed-name');
let list = document.querySelector('.answers')
let arr = [];

function addToArr(){
    if(input.value === ''){
        return
    } else{
        arr.push(input.value)
        addTask(input.value)
        input.value = '';
        console.log(input.value)
    } 
}

function addTask(taskName){
    let div = document.createElement('div');
    div.innerText = taskName;
    list.append(div);
    let deleteButton = createDeleteButton();
    div.append(deleteButton);
}

function createDeleteButton (){
    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'X';
    let buttonClass = button.classList;
    buttonClass.add('delete_button');
    button.addEventListener('click', clickDeleteButton)
    return button;
}



actionButton.addEventListener('click', (e) => {
    addToArr(e);
})

function clickDeleteButton(){
    arr.splice(0, 1);
}


    
    

