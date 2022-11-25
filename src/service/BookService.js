import axios from "axios"

const BOOK_REST_API_URL = 'http://127.0.0.1:8088/book/getBooks';

class BookService {

    getBook() {
        return axios.get(BOOK_REST_API_URL);
    }
}

export default new BookService();
