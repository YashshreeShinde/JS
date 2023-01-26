
const addBtn = document.getElementById("add");


//We are storing the notes in Local Storage of the browser.
//The notes are stored in array i.e array of notes
const notes = JSON.parse(localStorage.getItem("notes"));

//Even if we close the browser,it would be in local storage then when we reopen it ,it would display previous notes
//If we have found the array of notes in local storage then add those notes on page/app
if (notes) {
    notes.forEach((note) => {
        addNewNote(note);
    });
}

addBtn.addEventListener("click", () => {
    addNewNote();
});

function addNewNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>            
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editButton = note.querySelector(".edit");
    const deleteButton = note.querySelector(".delete");

    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    textArea.value = text;
    main.innerHTML = marked(text);      // converts the markdown string into an HTML string

    //toggle between main class and textarea when clicked on editButton.
    //Textarea to enter text and main would display it(unmodified) 
    editButton.addEventListener("click", () => {
        main.classList.toggle("hidden");          
        textArea.classList.toggle("hidden");
    });

    //update the local storage after deleting the note
    deleteButton.addEventListener("click", () => {
        note.remove();

        updateLocalStorage();
    });

    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);          // converts the markdown string into an HTML string

        updateLocalStorage();
    });

    document.body.appendChild(note);
}

function updateLocalStorage() {
    const notesText = document.querySelectorAll("textarea");

    const notes = [];
    //loop through every note's textarea and push that text in a array.Then push that array to localStorage
    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}
