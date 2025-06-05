import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
  books: [
  {
    "id": 1,
    "title": "Godaan",
    "author": "Munshi Premchand",
    "description": "A powerful novel about rural India's struggles with poverty and caste.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2eyyjM1w62oSWD8S6tjUvGtKb5O_inKdGCg&s",
    "category": "Fiction",
    "rating": 4.5
  },
  {
    "id": 2,
    "title": "Kamayani",
    "author": "Jaishankar Prasad",
    "description": "A philosophical epic poem that delves into human emotions and mythological themes.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VYiWMiL9cQj2QmkX9k21gwbo6F4FQuuPXw&s",
    "category": "Fiction",
    "rating": 4.2
  },
  {
    "id": 3,
    "title": "Agnipath",
    "author": "Harivansh Rai Bachchan",
    "description": "An inspirational Hindi poem that symbolizes determination and resilience.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc2qQONnMJYlWiXY5q_9axUQdDlz6Tq5rIrQ&s",
    "category": "Fiction",
    "rating": 4.7
  },
  {
    "id": 4,
    "title": "Yama",
    "author": "Mahadevi Verma",
    "description": "A poignant collection of Hindi poetry reflecting on love, loss, and existential thoughts.",
    "image": "https://m.media-amazon.com/images/I/51EvOBv6VzL._SY445_SX342_.jpg",
    "category": "Fiction",
    "rating": 4.3
  },
  {
    "id": 5,
    "title": "Lal Teen Ki Chhat",
    "author": "Nirmal Verma",
    "description": "A novella capturing the nuances of a changing India and middle-class life.",
    "image": "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/59/8a/35/598a3567-4788-d0e4-a1fa-e2f79e1f52e5/9780430017014.jpg/1200x900wf.jpg",
    "category": "Fiction",
    "rating": 3.9
  },
  {
    "id": 6,
    "title": "Gunahon Ka Devta",
    "author": "Dharamveer Bharti",
    "description": "A tragic love story set in post-independence India.",
    "image": "https://m.media-amazon.com/images/I/813GkVYIXcL.jpg",
    "category": "Romance",
    "rating": 4.4
  },
  {
    "id": 7,
    "title": "Anamdas Ka Potha",
    "author": "Hazari Prasad Dwivedi",
    "description": "A reflective work on Indian culture and philosophical musings.",
    "image": "https://m.media-amazon.com/images/I/919W7wJsyYL.jpg",
    "category": "Non-Fiction",
    "rating": 4.1
  },
  {
    "id": 8,
    "title": "Tyagpatra",
    "author": "Jainendra Kumar",
    "description": "A feminist narrative questioning traditional values and gender roles.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS532UQ-EorZXf2qOSxVody7AtlGs8FhvHs8g&s",
    "category": "Fiction",
    "rating": 4.0
  },
  {
    "id": 9,
    "title": "Divya",
    "author": "Yashpal",
    "description": "A historical novel about a woman’s journey through love and spiritual awakening.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRw50wf42ihm5NMkQHCZXTwRUjKSlHHNwGw&s",
    "category": "History",
    "rating": 4.2
  },
  {
    "id": 10,
    "title": "Tamas",
    "author": "Bhisham Sahni",
    "description": "A chilling novel based on the partition of India.",
    "image": "https://m.media-amazon.com/images/I/81faMT-cnzL._AC_UF1000,1000_QL80_.jpg",
    "category": "History",
    "rating": 4.6
  },
  {
    "id": 11,
    "title": "Thanda Gosht",
    "author": "Saadat Hasan Manto",
    "description": "A bold short story about the horrors of Partition.",
    "image": "https://m.media-amazon.com/images/I/71bbP4MkJRL._AC_UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.5
  },
  {
    "id": 12,
    "title": "Don Quixote",
    "author": "Miguel de Cervantes",
    "description": "A man imagines himself a knight and sets off on comical adventures.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvvPWViQl-uCbFZ5uB0w_iKdlg7HzQ7Wsfow&s",
    "category": "Fiction",
    "rating": 4.6
  },
  {
    "id": 13,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "description": "A romantic novel of manners focusing on love, marriage, and society.",
    "image": "https://m.media-amazon.com/images/I/71QlyxnQrDL.jpg",
    "category": "Romance",
    "rating": 4.7
  },
  {
    "id": 14,
    "title": "Moby-Dick",
    "author": "Herman Melville",
    "description": "The obsessive quest of Ahab for revenge on the white whale.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfjIkJ4Jw-_3ZXKk5KwkhZQVpSYE_2MIyN3w&s",
    "category": "Fiction",
    "rating": 4.1
  },
  {
    "id": 15,
    "title": "Jane Eyre",
    "author": "Charlotte Brontë",
    "description": "A gothic romance about a strong-willed orphan girl and her mysterious employer.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCDskdFWmvcNwtPMeqfzB5ZHRj1q0LPS0Zw&s",
    "category": "Romance",
    "rating": 4.5
  },
  {
    "id": 16,
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "description": "A tragic love story set on the Yorkshire moors.",
    "image": "https://i0.wp.com/writersbrew.com/wp-content/uploads/2015/04/wuthering-heights1.jpg?resize=505%2C640&ssl=1",
    "category": "Romance",
    "rating": 4.3
  },
  {
    "id": 17,
    "title": "The Adventures of Huckleberry Finn",
    "author": "Mark Twain",
    "description": "A boy’s journey along the Mississippi River grappling with society and morality.",
    "image": "https://m.media-amazon.com/images/I/91H34WEefnL._UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.4
  },
  {
    "id": 18,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A story about the American dream and the disillusionment of wealth.",
    "image": "https://m.media-amazon.com/images/I/81TLiZrasVL._UF1000,1000_QL80_DpWeblab_.jpg",
    "category": "Fiction",
    "rating": 4.6
  },
  {
    "id": 19,
    "title": "1984",
    "author": "George Orwell",
    "description": "A dystopian future of surveillance, oppression, and loss of freedom.",
    "image": "https://m.media-amazon.com/images/I/71rpa1-kyvL._AC_UF1000,1000_QL80_.jpg",
    "category": "Sci-Fi",
    "rating": 4.8
  },
  {
    "id": 20,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "description": "A young girl witnesses racial injustice in the American South.",
    "image": "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    "category": "Fiction",
    "rating": 4.9
  },
  {
    "id": 21,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "description": "A technologically advanced future society that sacrifices humanity.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8RI9yORuC1EwckCoXg3B25M_xDY2uVc8snQ&s",
    "category": "Sci-Fi",
    "rating": 4.5
  },
  {
    "id": 22,
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "description": "A psychological exploration of guilt and redemption.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY_3S2H0-UonpgYMz5BjHrf5DXLSd24afpSA&s",
    "category": "Fiction",
    "rating": 4.6
  },
  {
    "id": 23,
    "title": "War and Peace",
    "author": "Leo Tolstoy",
    "description": "An epic novel of Russian society during the Napoleonic Wars.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZg2xU9fDTYcTfT56E0HvGHXMyxhSGNlUWHA&s",
    "category": "History",
    "rating": 4.2
  },
  {
    "id": 24,
    "title": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "description": "A philosophical novel on faith, doubt, and free will.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcT7_ai5wrNtiIggok3RyO6OLkJx8luDmcg&s",
    "category": "Fiction",
    "rating": 4.7
  },
  {
    "id": 25,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "description": "A teenager’s critique of adult hypocrisy and search for identity.",
    "image": "https://thethinksync.com/wp-content/uploads/2021/09/thecatcherintherye.jpg",
    "category": "Fiction",
    "rating": 4.0
  },
  {
    "id": 26,
    "title": "The Stranger",
    "author": "Albert Camus",
    "description": "An absurdist take on human existence and indifference.",
    "image": "https://m.media-amazon.com/images/I/61zkDUI+MfL._AC_UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.3
  },
  {
    "id": 27,
    "title": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "description": "A magical realist family saga in the fictional town of Macondo.",
    "image": "https://resizing.flixster.com/M2yv0Zo1aZPqj4GTqwam90WOsU0=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p28795648_b_v10_aa.jpg",
    "category": "Fiction",
    "rating": 4.7
  },
  {
    "id": 28,
    "title": "The Trial",
    "author": "Franz Kafka",
    "description": "A man is arrested by an unknown authority for an unknown crime.",
    "image": "https://m.media-amazon.com/images/I/71X73uwgd1L._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    "category": "Fiction",
    "rating": 4.2
  },
  {
    "id": 29,
    "title": "Lolita",
    "author": "Vladimir Nabokov",
    "description": "A controversial tale of obsession and manipulation.",
    "image": "https://m.media-amazon.com/images/I/91QwfKeVsfL._AC_UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 3.8
  },
  {
    "id": 30,
    "title": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "description": "A fisherman’s relentless struggle against nature.",
    "image": "https://m.media-amazon.com/images/I/81uaGXiRF4L._AC_UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.5
  },
  {
    "id": 31,
    "title": "The Sun Also Rises",
    "author": "Ernest Hemingway",
    "description": "A post-WWI exploration of the Lost Generation.",
    "image": "https://m.media-amazon.com/images/I/61-eQbeBWLL._UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.1
  },
  {
    "id": 32,
    "title": "Anna Karenina",
    "author": "Leo Tolstoy",
    "description": "A tragic story of love, betrayal, and societal pressures.",
    "image": "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/5/l/j/anna-karenina-original-imagk7sw9hhfn2mx.jpeg?q=90&crop=false",
    "category": "Romance",
    "rating": 4.6
  },
  {
    "id": 33,
    "title": "Great Expectations",
    "author": "Charles Dickens",
    "description": "A coming-of-age story about wealth and self-discovery.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6aW5_y-zD5DxOIDu7op_ZWa3C1Y3i-iOIg&s",
    "category": "Fiction",
    "rating": 4.4
  },
  {
    "id": 34,
    "title": "David Copperfield",
    "author": "Charles Dickens",
    "description": "A semi-autobiographical tale of a young man’s growth.",
    "image": "https://m.media-amazon.com/images/I/81vxI-RbP3L._UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.3
  },
  {
    "id": 35,
    "title": "Les Misérables",
    "author": "Victor Hugo",
    "description": "A story of justice, love, and redemption in revolutionary France.",
    "image": "https://covers.storytel.com/jpg-640/9781504043588.30f6b3f3-97bc-4add-9f80-40c4636834fe?optimize=high&quality=70&width=600",
    "category": "History",
    "rating": 4.8
  },
  {
    "id": 36,
    "title": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "description": "A gripping tale of betrayal, revenge, and justice.",
    "image": "https://m.media-amazon.com/images/I/81LsJ04ZCeL._UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.7
  },
  {
    "id": 37,
    "title": "Dracula",
    "author": "Bram Stoker",
    "description": "The origin story of the iconic vampire Count Dracula.",
    "image": "https://rukminim3.flixcart.com/image/850/1000/xif0q/book/o/h/z/dracula-original-imagmfcbvggggz93.jpeg?q=20&crop=false",
    "category": "Fiction",
    "rating": 4.2
  },
  {
    "id": 38,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "description": "A scientist’s monstrous creation and the consequences of ambition.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltXOvNlx2rA9_Rty22gT3DwoJEIyoBGttEg&s",
    "category": "Sci-Fi",
    "rating": 4.4
  },
  {
    "id": 39,
    "title": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "description": "A man sells his soul to remain young and beautiful forever.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZGUwCH_EzbCuDxrzfSECJdl-keVH93HN5A&s",
    "category": "Fiction",
    "rating": 4.5
  },
  {
    "id": 40,
    "title": "The Bell Jar",
    "author": "Sylvia Plath",
    "description": "A semi-autobiographical novel about mental health and society.",
    "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1297266095i/395040.jpg",
    "category": "Fiction",
    "rating": 4.1
  },
  {
    "id": 41,
    "title": "Beloved",
    "author": "Toni Morrison",
    "description": "A former slave is haunted by her past and the ghost of her child.",
    "image": "https://i.ebayimg.com/images/g/wPkAAOSw8UtbOyfH/s-l1200.jpg",
    "category": "Fiction",
    "rating": 4.7
  },
  {
    "id": 42,
    "title": "The Color Purple",
    "author": "Alice Walker",
    "description": "An African-American woman’s struggle for independence and identity.",
    "image": "https://upload.wikimedia.org/wikipedia/en/thumb/6/60/ColorPurple.jpg/250px-ColorPurple.jpg",
    "category": "Fiction",
    "rating": 4.6
  },
  {
    "id": 43,
    "title": "Things Fall Apart",
    "author": "Chinua Achebe",
    "description": "A powerful depiction of African tribal life and colonization.",
    "image": "https://m.media-amazon.com/images/I/91NtvTU0xEL._AC_UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.5
  },
  {
    "id": 44,
    "title": "Fahrenheit 451",
    "author": "Ray Bradbury",
    "description": "A dystopian society where books are banned and burned.",
    "image": "https://upload.wikimedia.org/wikipedia/en/d/db/Fahrenheit_451_1st_ed_cover.jpg",
    "category": "Sci-Fi",
    "rating": 4.6
  },
  {
    "id": 45,
    "title": "Slaughterhouse-Five",
    "author": "Kurt Vonnegut",
    "description": "A dark, satirical novel about war and time travel.",
    "image": "https://m.media-amazon.com/images/I/910Xcv-pT+L._UF1000,1000_QL80_.jpg",
    "category": "Sci-Fi",
    "rating": 4.4
  },
  {
    "id": 46,
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "description": "A philosophical journey about following your dreams and destiny.",
    "image": "https://m.media-amazon.com/images/I/61HAE8zahLL.jpg",
    "category": "Fiction",
    "rating": 4.3
  },
  {
    "id": 47,
    "title": "Siddhartha",
    "author": "Hermann Hesse",
    "description": "A spiritual journey of self-discovery inspired by the life of the Buddha.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo4JEKsbFL_yIoA6bjdutDROyNXZSLP72S_Q&s",
    "category": "Fiction",
    "rating": 4.5
  },
  {
    "id": 48,
    "title": "Midnight's Children",
    "author": "Salman Rushdie",
    "description": "A magical realist novel set during India’s transition to independence.",
    "image": "https://m.media-amazon.com/images/I/81uAR0HJrUL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
    "category": "History",
    "rating": 4.4
  },
  {
    "id": 49,
    "title": "Train to Pakistan",
    "author": "Khushwant Singh",
    "description": "A haunting story of Partition-era violence and humanity.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4AYI10cWno4NW7WkETQCDD2im1EQFP-uE5w&s",
    "category": "History",
    "rating": 4.3
  },
  {
    "id": 50,
    "title": "The Guide",
    "author": "R.K. Narayan",
    "description": "A tourist guide’s transformation through love, fame, and spiritual growth.",
    "image": "https://m.media-amazon.com/images/I/71UseLsa-CL._AC_UF1000,1000_QL80_.jpg",
    "category": "Fiction",
    "rating": 4.1
  },
  {
    "id": 51,
    "title": "Mritunjay",
    "author": "Shivaji Sawant",
    "description": "A retelling of Mahabharata from Karna’s point of view.",
    "image": "https://5.imimg.com/data5/ANDROID/Default/2024/6/423863597/XX/TO/EG/127010414/product-jpeg.jpg",
    "category": "Fantasy",
    "rating": 4.6
  }
    // You can add more dummy data here
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ id: nanoid(), ...action.payload });
    },
    editBook: (state, action) => {
      const index = state.books.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, editBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
