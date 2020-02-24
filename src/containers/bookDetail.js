import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a Book to get started.</div>;
		}
		return (
			<div>
				<h3>Details for:</h3> {this.props.book.title}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { book: state.book };
};

export default connect(mapStateToProps)(BookDetail);
