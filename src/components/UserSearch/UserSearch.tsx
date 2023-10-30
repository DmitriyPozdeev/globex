import React, {FC, ChangeEvent} from 'react'
import styles from './userSearch.module.css'
import searchIcon from '../../assets/search.svg';

interface Props {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const UserSearch: FC<Props> = ({value, onChange}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(value.trim().length > 0) {
      history.pushState(null, '',`?term=${value}`);
    }
  }
  return (
    <form 
      className={styles.form}
      onSubmit={onSubmit}>
      <input 
        value={value} 
        onChange={onChange} 
        className={styles.searchUser} 
      />
      <button type='submit' className={styles.submitButton}>
      <img 
        onClick={() => SubmitEvent}
        
        src={searchIcon} 
        alt='search'
      />
      </button>
      
    </form>
  )
}
