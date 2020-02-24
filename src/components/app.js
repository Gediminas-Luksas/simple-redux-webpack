import React from 'react';
import '../../styles/styles.css';

import BooksList from '../containers/booksList';
import BookDetail from '../containers/bookDetail';

const App = () => {
	return (
		<div className="container">
			<BooksList />
			<BookDetail />
		</div>
	);
};
export default App;
