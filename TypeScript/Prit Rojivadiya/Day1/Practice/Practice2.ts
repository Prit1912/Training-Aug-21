export {};

function getAllBooks(){
    let books = [
        {title: "book1",author: "author1",available: true, category: Category.Boigraphy},
        {title: "book2",author: "author2",available: false, category: Category.Poetry},
        {title: "book3",author: "author3",available: true, category: Category.Fiction},
        {title: "book4",author: "author4",available: true, category: Category.History}
    ]
    return books;
};

function logFirstBookAvailable(books): void{
    let noOfBooks: number = books.length;
    let firstAvailable: string = '';
    for(let currBook of books){
        if(currBook.available){
            firstAvailable = currBook.title;
            break;
        }
    }
    console.log('Total books: ',noOfBooks);
    console.log('First available books: ',firstAvailable);
};

enum Category { Boigraphy, Poetry, Fiction, History, Children };

function getBookTitlesByCategory(categoryFilter: Category): string[]{
    
    console.log('getting books in category: ' + Category[categoryFilter]);
    const allBooks = getAllBooks();
    let bookTitles: string[] = [];

    for(let book of allBooks){
        if(book.category === categoryFilter){
            bookTitles.push(book.title);
        }
    }

    return bookTitles;
}

function logBookTitle(titles: string[]): void{
    for(let title of titles){
        console.log(title);
    }
}

const poetryBooks = getBookTitlesByCategory(Category.Poetry);
logBookTitle(poetryBooks);

const allBooks = getAllBooks();
logFirstBookAvailable(allBooks);