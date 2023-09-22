const data = [
    {
      id: 1,
      title: "The Lord of the Rings",
      publicationDate: "1954-07-29",
      author: "J. R. R. Tolkien",
      genres: [
        "fantasy",
        "high-fantasy",
        "adventure",
        "fiction",
        "novels",
        "literature",
      ],
      hasMovieAdaptation: true,
      pages: 1216,
      translations: {
        spanish: "El señor de los anillos",
        chinese: "魔戒",
        french: "Le Seigneur des anneaux",
      },
      reviews: {
        goodreads: {
          rating: 4.52,
          ratingsCount: 630994,
          reviewsCount: 13417,
        },
        librarything: {
          rating: 4.53,
          ratingsCount: 47166,
          reviewsCount: 452,
        },
      },
    },
    {
      id: 2,
      title: "The Cyberiad",
      publicationDate: "1965-01-01",
      author: "Stanislaw Lem",
      genres: [
        "science fiction",
        "humor",
        "speculative fiction",
        "short stories",
        "fantasy",
      ],
      hasMovieAdaptation: false,
      pages: 295,
      translations: {},
      reviews: {
        goodreads: {
          rating: 4.16,
          ratingsCount: 11663,
          reviewsCount: 812,
        },
        librarything: {
          rating: 4.13,
          ratingsCount: 2434,
          reviewsCount: 0,
        },
      },
    },
    {
      id: 3,
      title: "Dune",
      publicationDate: "1965-01-01",
      author: "Frank Herbert",
      genres: ["science fiction", "novel", "adventure"],
      hasMovieAdaptation: false,
      pages: 658,
      translations: {
        spanish: "",
      },
      reviews: {
        goodreads: {
          rating: 4.25,
          ratingsCount: 1142893,
          reviewsCount: 49701,
        },
      },
    },
    {
      id: 4,
      title: "Harry Potter and the Philosopher's Stone",
      publicationDate: "1997-06-26",
      author: "J. K. Rowling",
      genres: ["fantasy", "adventure"],
      hasMovieAdaptation: true,
      pages: 223,
      translations: {
        spanish: "Harry Potter y la piedra filosofal",
        korean: "해리 포터와 마법사의 돌",
        bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
        portuguese: "Harry Potter e a Pedra Filosofal",
      },
      reviews: {
        goodreads: {
          rating: 4.47,
          ratingsCount: 8910059,
          reviewsCount: 140625,
        },
        librarything: {
          rating: 4.29,
          ratingsCount: 120941,
          reviewsCount: 1960,
        },
      },
    },
    {
      id: 5,
      title: "A Game of Thrones",
      publicationDate: "1996-08-01",
      author: "George R. R. Martin",
      genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
      hasMovieAdaptation: true,
      pages: 835,
      translations: {
        korean: "왕좌의 게임",
        polish: "Gra o tron",
        portuguese: "A Guerra dos Tronos",
        spanish: "Juego de tronos",
      },
      reviews: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 2295233,
          reviewsCount: 59058,
        },
        librarything: {
          rating: 4.36,
          ratingsCount: 38358,
          reviewsCount: 1095,
        },
      },
    },
  ];
  
  function getBooks() {
    return data;
  }
  
  function getBook(id) {
    return data.find((d) => d.id === id);
  }
  
 // Destructuring
 const book = getBook(2);


 //book;
 //const title=book.title;
 //title;
// const author=book.author;
 //author;

 // destructuring objects
 const{author,title,reviews,genres} = book;
 console.log(author,title,reviews);

 //destructuring with Arrays
 const primaryGenre=genres[0];
      const secondaryGenre=genres[1];
      console.log(primaryGenre,secondaryGenre);

 let names=['alpha', 'beta', 'gamma','delta'];
 const firstName=names[0];
 const lastName=names[1];

 console.log(firstName,lastName);

 const [thirdName,fourthName]= names;
 console.log(thirdName,fourthName);

const book2 = getBook(3);
const {id,pages,publicationDate,...translations}= book2;
console.log(id,pages,publicationDate,genres,translations);

//uses of spread operators to add elements to the array.
const newGenres =['epic fantasy',...genres]
console.log(newGenres);

// we use spread operators to add new elements to the array or an object.
const book3 = getBook(1);
const updatedBook = {book, 

  //Adding an existing property.
  moviePublicationDate: "2001-12-19",
  
  //Overwriting a existing property.
  pages: 1210
}
updatedBook;


//TEMPLATES LITERALS IN REACT.
const summery=`${title} is a book with ${pages} pages was written by '${author}' and published in ${publicationDate}`;
summery;

//TERNARIES INSTEAD OF IF ELSE .
const pagesRange=pages > 100 ? 'Over a thousand ': 'less than 1000';
pagesRange

//ARROW FUNCTIONS
//function getYear(str){
  //return str.split('-')[0];
//}
//console.log(getYear(publicationDate));

const getYear =(str)=> str.split('-')[0];
console.log(getYear(publicationDate));

// SHORT CIRCUITING AND LOGICAL OPERATORS && || ?? 
// if true ,then compiler will display the second output
// if false ,then compiler will display the boolean output

console.log(true && 'Some string');
console.log(false && 'Some string');

console.log("Emmanuel" && "Some string");

// works for  falsy values : 0, '' , null , undefined
console.log("" && "Some string");
console.log(0 && "Some string");

// the OR operator || .
// occurs where the boolean value is true only
console.log(true || "Some string");
console.log(false || "Some string");

// EXAMPLES.
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

    const gfg= function (){
      console.log("------------------");
      console.log(false && true);
      console.log(false && false);
      console.log(true && false);
      console.log(true && true);

      console.log("----------------");
      console.log(true || false);
      console.log(true || true);
      console.log(false || true);
      console.log(false || false);
    }
    gfg();