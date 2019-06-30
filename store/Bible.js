class Bible{
    constructor(){
        // Employing the singleton pattern to ensure only one instance of Bible
        if(!Bible.instance){
            Bible.instance = this;
            this.bible = { book: 'Genesis', chapter: 1 };
        }

        return Bible.instance;
    }

    setBook(book){
        this.bible.book = book;
        // Resetting current chapter to 1 after book change
        this.bible.chapter = 1;
    }

    setChapter(chapter){
        this.bible.chapter = chapter;
    }

    getBook(){
        return this.bible.book;
    }

    getChapter(){
        return this.bible.chapter;
    }
}

const bibleInstance = new Bible();
Object.freeze(bibleInstance);

export default bibleInstance;