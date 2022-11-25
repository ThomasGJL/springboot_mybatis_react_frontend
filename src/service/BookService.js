import axios from "axios"

const BOOK_REST_API_URL = '';

class BookService {

    getBook() {
        return axios.get(BOOK_REST_API_URL);
    }
}

export default new BookService();
