function addNewBook() {
    
    var finishedBookList = document.getElementById('finishedBookList');
    var currentBookList = document.getElementById('currentBookList');
    var awaitedBookList = document.getElementById('awaitedBookList');
    var books = document.createElement('li');
    var newOfBook = document.getElementById('newBook');
    var finishedOfBook = document.getElementById('finishedBook');
    var addBook = document.getElementById('addBook');
    
    
    //TITLE OF THE BOOK
    var title = document.getElementById('title').value;
    var titleDisplay = document.createElement('h4');

    titleDisplay.setAttribute('id', 'bookTitle');
    titleDisplay.textContent = title;
    
    //GENRE DROPDOWN MENU
    var genreDropDown = document.getElementById('genre');
    var genreDropDownResult = document.createElement('h5');

    genreDropDownResult.textContent = genreDropDown.value;
    genreDropDownResult.setAttribute('id', 'genreResult');

    //BOOK'S NUMBER OF PAGES
    var pages = document.getElementById('pages').value;
    var pagesDisplay = document.createElement('h5');

    pagesDisplay.setAttribute('id', 'bookPages');
    pagesDisplay.textContent = pages;

    //CURRENT PAGE NUMBER
    var currentPage = document.getElementById('currentPage').value;
    var currentPagesDiv = document.createElement('div');
    var currentPageDisplayInput = document.createElement('input');
    var updateCurrentPageButton = document.createElement('button');

    currentPagesDiv.setAttribute('id', 'currentPages');
    currentPageDisplayInput.setAttribute('id', 'bookCurrentPage');
    updateCurrentPageButton.setAttribute('id', 'updateCurrentPage');
    currentPageDisplayInput.setAttribute('type', 'number');

    updateCurrentPageButton.onclick = updatePage();
    updateCurrentPageButton.textContent = 'Update';
    
    currentPageDisplayInput.placeholder = currentPage;
    currentPageDisplayInput.min = currentPage;

    currentPagesDiv.appendChild(currentPageDisplayInput);
    currentPagesDiv.appendChild(updateCurrentPageButton);

//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    //UPDATE SECTION
    function updatePage() {
        updateCurrentPageButton.addEventListener('click', () => {
            currentPageDisplayInput.placeholder = currentPageDisplayInput.value;
            currentPageDisplayInput.min = currentPageDisplayInput.value;
        });
    }

    //DISPLAY THE BOOK AT THE PROPER PLACE
    if (finishedOfBook.checked === true) {
        finishedBookList.appendChild(books);
        
    } else {
        if (newOfBook.checked === true && notStartedBook.checked === true) {
            awaitedBookList.appendChild(books);
        } else {
            currentBookList.appendChild(books);
            books.appendChild(currentPagesDiv);
        }
    }
    
    books.appendChild(titleDisplay);
    books.appendChild(genreDropDownResult);
    books.appendChild(pagesDisplay);
}

//FIRST RADIO BUTTONS
//If the book is new
function newBookRadio() {

    var newOfBook = document.getElementById('newBook');
    var searchBar = document.getElementById('searchBar');
    

    newOfBook.addEventListener('change', () => {
        searchBar.classList.remove('searchBarSecondStepOut');
        searchBar.classList.add('searchBarSecondStepIn');
    });
}
//If the book is finished
function finishedBookRadio() {

    var finishedOfBook = document.getElementById('finishedBook');
    var searchBar = document.getElementById('searchBar');

    finishedOfBook.addEventListener('change', () => {
        searchBar.classList.remove('searchBarSecondStepIn');
        searchBar.classList.remove('searchBarThirdStepIn');
        searchBar.classList.remove('searchBarThirdStepOut');
        searchBar.classList.add('searchBarSecondStepOut');
        startedBook.checked = 'false';
        notStartedBook.checked = 'false';
    });
}
//SECOND RADIO BUTTONS
//If the book is not started
function notStartedRadio() {

    var notStartedBook = document.getElementById('notStartedBook');
    var searchBar = document.getElementById('searchBar');
    
    notStartedBook.addEventListener('change', () => { 
        searchBar.classList.remove('searchBarThirdStepIn');
        searchBar.classList.remove('searchBarSecondStepIn');
        searchBar.classList.add('searchBarThirdStepOut');
    });
}
//If the book is started
function startedRadio() {

    var startedBook = document.getElementById('startedBook');
    var searchBar = document.getElementById('searchBar');
    
    startedBook.addEventListener('change', () => { 
        searchBar.classList.remove('searchBarSecondStepOut');
        searchBar.classList.remove('searchBarSecondStepIn');
        searchBar.classList.remove('searchBarThirdStepOut');
        searchBar.classList.add('searchBarThirdStepIn');
        
    });
}



