import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions';

class BooksList extends Component {
	selectedBook = (book) => {
		this.props.selectBook(book);
	};

	renderList() {
		return this.props.books.map((book) => {
			return (
				<li onClick={() => this.selectedBook(book)} key={book.title} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
	}
}

const mapStateToProps = (state) => {
	return { books: state.books };
};

export default connect(mapStateToProps, { selectBook })(BooksList);
