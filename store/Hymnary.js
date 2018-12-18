class Hymnary{
    constructor(){
        // Employing the singleton pattern to ensure only one instance of Bible
        if(!Hymnary.instance){
            Hymnary.instance = this;
            this.hymnary = { language: "English", hymnNumber: 1 };
        }

        return Hymnary.instance;
    }


    setLanguage(language){
        this.hymnary.language = language;

        // Setting default hymn to 1
        this.hymnary.hymnNumber = 1;
    }

    setHymnNumber(number){
        let convertedNumber = Number(number);
        if(isNaN(convertedNumber)) return;
        this.hymnary.hymnNumber = number;
    }


    getHymnNumber(){
        return this.hymnary.hymnNumber
    }

    getHymLanguage(){
        return this.hymnary.language
    }

}

const hymnaryInstance = new Hymnary();
Object.freeze(hymnaryInstance);

export default hymnaryInstance;