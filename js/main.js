let toDoList = new ToDoList();
let validatetor = new Validatetor();

getLocalStorage();
function getEle(id) {
    return document.getElementById(id);
}

//render todo list
function renderToDo (toDoList) {
    var content = '';
    var content2 = ''
    toDoList.forEach(function (toDo, index) {
        if(toDo.status == false){
            content += `
            <li> 
            ${toDo.taskName} 
            <div class="buttons">
            <button id="btnXoa" onClick="xoaToDo(${toDo.id})"><i class="fa fa-trash-alt"></i></button>
            <button id="btnCheck" onClick="checkToDo(${toDo.id})"><i class="fa fa-check-circle"></i>
            </button>
            </div>               
        </li>
            `
        }
        else{
            content2 += `
            <li> 
                ${toDo.taskName} 
                <div class="buttons">
                <button id="btnXoa" onClick="xoaToDo(${toDo.id})"><i class="fa fa-trash-alt"></i></button>
                <button id="btnCheck" onClick="checkCompleted(${toDo.id})"><i class="fa fa-check-circle"></i>
                </button>
                </div>               
            </li>
        `
        }
    });
    getEle('todo').innerHTML = content;
    getEle('completed').innerHTML = content2;
}

renderToDo(toDoList.arr);

getEle('addItem').addEventListener('click', function(){
    let id = Math.random();
    let taskName = getEle('newTask').value;
    let status = false;

    let isValid = true;
    isValid = validatetor.KiemTraRong(taskName,'notiInput','Vui lòng không để trống') && validatetor.KiemTraTrung(toDoList.arr,taskName,false,'notiInput', "Thông tin đã tồn tại") && validatetor.KiemTraTrung(toDoList.arr,taskName,true,'notiInput', "Thông tin đã hoàn thành")
    if(!isValid) return;

    let toDo = new Task(id, taskName, status);
    
    toDoList.themToDo(toDo);
    getEle('newTask').value = '';
    renderToDo(toDoList.arr);
    setLocalStorage();
});

function xoaToDo(id){
    toDoList.xoaToDo(id);
    renderToDo(toDoList.arr);
    setLocalStorage();
    alert('Delete Success!');
}

function checkToDo(id){
    toDoList.checkToDo(id);
    renderToDo(toDoList.arr);
    setLocalStorage();
    alert('Change Status Success!');
}

function checkCompleted(id){
    toDoList.checkCompleted(id);    
    renderToDo(toDoList.arr);
    setLocalStorage();
    alert('Change Status Success!');
}

function setLocalStorage() {
    // thêm xoá sửa thì chạy setLocalStorage
    localStorage.setItem('ToDo', JSON.stringify(toDoList.arr));
}

function getLocalStorage() {
    if (localStorage.getItem('ToDo')) {
        toDoList.arr = JSON.parse(localStorage.getItem('ToDo'));
        renderToDo(toDoList.arr);
    }

}