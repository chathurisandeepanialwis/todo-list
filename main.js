

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addText() {
    if(inputBox.value === '') {
        alert("You must type something in the input box !")
    } else {
        let li = document.createElement('li');
        li.textContent = inputBox.value;
        // li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
        
    }
    inputBox.value = '';
}
listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked')
    } else if (e.target.tagName === 'span'){ 
        e.target.parentElement.remove()
        saveData()
    }
})

function saveData() {
    localStorage.setItem('data',listContainer.innerHTML)
}

function showTask() {
    listContainer. innerHTML = localStorage.getItem('data');
}

showTask();