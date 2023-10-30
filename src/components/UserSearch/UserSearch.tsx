import React, {FC, useState} from 'react'
import styles from './userSearch.module.css'
import searchIcon from '../../assets/search.svg';
import queryString from 'query-string';
import useDebounce from '../../hooks/useDebounce';

interface Props {
  getUserHandler: (str: string) => void,
  pushHistory: (str: string) => void
}

const parsed = queryString.parse(location.search);

export const UserSearch: FC<Props> = ({getUserHandler, pushHistory}) => {

  const [searchValue, setSearchValue] = 
    useState<string>(parsed['term'] as string || '');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(searchValue.trim().length > 0) {
      history.pushState(null, '',`?term=${searchValue}`);
    }
  }

  const debouncedSearch = useDebounce(getUserHandler, 500);
  const debouncedHistory = useDebounce(pushHistory, 500);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setSearchValue(value);
    debouncedSearch(value);
    debouncedHistory(value);
  }

  return (
    <form 
      className={styles.form}
      onSubmit={onSubmit}>
      <input 
        type='text'
        value={searchValue} 
        onChange={changeHandler} 
        className={styles.searchUser} 
      />
      <button type='submit' className={styles.submitButton}>
        <img 
          src={searchIcon} 
          alt='search'
        />
      </button>
    </form>
  )
}
