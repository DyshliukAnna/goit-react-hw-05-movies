import css from './SearchBar.module.css';
import { useState } from 'react';
import Notiflix from 'notiflix';

const SearchBar = ({ onSubmit }) => {
  const [searchQuery, setsearchQuery] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setsearchQuery(value);
  };
  const handleSearchSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      Notiflix.Notify.info('Search string is empty!');
      return;
    }
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setsearchQuery('');
  };

  return (
    <>
      <header className={css.SearchBar}>
        <form className={css.Form} onSubmit={handleSearchSubmit}>
          <input
            className={css.Input}
            type="text"
            autoComplete="off"
            name="searchQuery"
            value={searchQuery}
            autoFocus
            placeholder="Search images and photos"
            onChange={handleInputChange}
          />
          <button type="submit" className={css.Button}>
            Search
          </button>
        </form>
      </header>
    </>
  );
};
export default SearchBar;