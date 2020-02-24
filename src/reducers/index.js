import { combineReducers } from 'redux';
import ReducerBooks from './reducerBooks';
import SelectedBook from './selectedBook';

const rootReducer = combineReducers({
	books: ReducerBooks,
	book: SelectedBook,
});

export default rootReducer;
