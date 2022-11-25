import React from "react"
import BookService from "../service/BookService"

class BookComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            books:[]
        }
    }

    componentDidMount() {
        BookService.getBook().then((response) => {
            this.setState({ books: response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className = "text-center">图书列表</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>书名</td>
                            <td>作者</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.books.map(
                            book =>
                            <tr key = {book.id}>
                                <td>{book.name}</td>
                                <td>{book.author}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default BookComponent;
