const addBtn = document.querySelector('.add-button');
const deleteAllBtn = document.querySelector('.delete-all-button');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtns = document.getElementsByClassName('.delete-note');

const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');
const notePanel = document.querySelector('.note-panel');
const noteArea = document.querySelector('.note-area');

let selectedValue;
let cardID = 0;

const openPopup = () => {
    notePanel.style.display = 'flex';
}

const closePopup = () => {
    notePanel.style.display = 'none';
    error.style.visibility = 'hidden';
    textarea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);

    newNote.innerHTML = `
        <div class="note-header">
            <h3 class="note-title">${selectedValue}</h3>
            <button class="delete-note" onclick="deleteNote(${cardID})"><i class="fa-solid fa-x"></i></button>
        </div>
        <div class="note-body">
            <p>${textarea.value}</p>
        </div>
    `
    noteArea.appendChild(newNote);
    cardID++;
    textarea.value = '';
    category.selectedIndex = '0';
    notePanel.style.display = 'none';
    checkColor(newNote);

}


const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const checkColor = note => {
    switch(selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgb(72,255,0)';
            break;
        case 'Nauka':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
    }
}

const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}

const deleteAllNotes = () => {
    noteArea.textContent = '';
}

addBtn.addEventListener('click', openPopup);
cancelBtn.addEventListener('click', closePopup);
saveBtn.addEventListener('click', addNote);
deleteAllBtn.addEventListener('click', deleteAllNotes);
