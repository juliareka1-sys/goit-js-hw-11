// //improt z inshych js
// У файлі main.js напиши всю логіку роботи додатка. Виклики нотифікацій iziToast, усі перевірки на довжину масиву в отриманій відповіді робимо саме в цьому файлі.
// Імпортуй в нього функції із файлів pixabay-api.js та render-functions.js та викликай їх у відповідний момент.


// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// // Описаний у документації
// import iziToast from "izitoast";
// // Додатковий імпорт стилів
// import "izitoast/dist/css/iziToast.min.css";


// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком),
//  здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.

// Sorry, there are no images matching your search query. Please try again! tekst povidomlennia

import { getImagesByQuery } from "./js/pixabay-api.js";

