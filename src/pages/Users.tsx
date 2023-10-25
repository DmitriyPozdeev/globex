import React, {FC} from 'react';
import { SearchUser } from '../components/UserSearch/UserSearch';
import { UserList } from '../components/UserList/UserList';
import styles from './users.module.css';

export const Users: FC = () => {
  // const [searchValue, setSearchValue] = useState('');
  // const search = (e) => {

  // }
  return (
    <div className={styles.wrapper}>
      <SearchUser/>
      <UserList/>
    </div>
  )
}
