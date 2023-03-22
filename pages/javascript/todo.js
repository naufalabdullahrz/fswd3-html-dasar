let todos = {}
const STORAGE_DO = "STORAGE_DO"
const todoBox = document.getElementById('todo')


//membaca localStorage 
if(todoFromLocal = localStorage.getItem(STORAGE_DO)) {
    todos = JSON.parse(todoFromLocal)
    for(let key in todos)
    createList(key, todos[key])
}


    function syncLocalStorage(activity, item, status = false) {
        switch(activity) {
            case 'ADD':
            case 'UPDATE':
                todos[item] = status
                break;
            case 'DELETE':
                delete todos[item]
                break;
            default:
                break;    
            }

        localStorage.setItem(STORAGE_DO, JSON.stringify(todos))
            return
        }

// TODO 
function add() {
    let textbaru = document.getElementById('dobaru')
    createList(textbaru.value)
    syncLocalStorage('ADD', textbaru.value)
    //API
    let dataapi = {
        List: textbaru.value
    };
    let fetchOptions = {
        method: "POST", 
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(dataapi),
    };
    
    fetch(
        "https://crudcrud.com/api/67a63beebea3422d8c72a3af05be62cf/todoku", fetchOptions
    )
    .then((response)=>response.json())
    .then((data)=>console.log(data));
    textbaru.value = ''
}

function createList(text, status = false) {
    let listdone = (status) ? 'text-decoration-line-through' : ''

    let todoBaru = `<li> 
                    <span class='${listdone}' onclick='toggle(this)'>${text}</span>
                    <span onclick='removeItem(this)'>x</span>
                    </li>`

            todoBox.insertAdjacentHTML('afterbegin', todoBaru);
        }

//Toggle/coret
function toggle(elm) {
    let status = elm.classList.toggle('text-decoration-line-through')
     syncLocalStorage('UPDATE', elm.innerText, status)    
}

//Delete
function removeItem(elm) {
    elm.parentElement.remove()
    syncLocalStorage('DELETE', elm.previousElementSibling.innerText.trim())    
}




























