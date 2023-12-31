import React, {FC, useState, useEffect} from 'react';
import { UserSearch } from '../components/UserSearch/UserSearch';
import { UserList } from '../components/UserList/UserList';
import styles from './users.module.css';
import { UserInfoPopup } from '../components/UserInfoPopup/UserInfoPopup';
import userService from '../services/userService';
import queryString from 'query-string';
import { Spin } from '../components/Spin/Spin';

const parsed = queryString.parse(location.search);

export interface UserData {
  name?: string,
  phone?: string,
  email?: string,
  hire_date?: string,
  position_name?: string,
  department?: string,
  address?: string,
} 

export const Users: FC = () => {
  const [userList, setUserList] = useState<UserData[]>([]);
  const [currentUser, setCurrentUser] = useState<UserData>({});
  const [active, setActive] = useState(false);
  const [loadState, setLoadState] = useState<'pending' | 'done' | 'error'>('done');

  const closePopup = () => {
    setActive(false);
  }
  const openPopup = () => {
    setActive(true);
  }

  const getUsers = async(userName: string = '') => { 
    setLoadState('pending');
    try {
      const {data} = await userService.getUsers(userName)
      setUserList(data)
      setLoadState('done');
    } catch (err) {
      setLoadState('error');
    }
    
  }
  const pushHistory = (value: string) => {
    value.trim().length > 0 ?
    history.pushState(null, '',`?term=${value}`): 
    history.pushState(null, '','/');
  }

  
  useEffect(() => {
    setLoadState('pending');
    try{
      getUsers(parsed['term'] as string);
      setLoadState('done');
    } catch(err) {
      setLoadState('error');
    } 
  }, [])
  return (
    <div className={styles.wrapper}>
      <UserSearch 
        getUserHandler={getUsers} 
        pushHistory={pushHistory}
      />

      <Spin active={loadState === 'pending'}>
        {
          loadState !== 'error' ? (
            <UserList 
              users={userList} 
              openPopup={openPopup} 
              setCurrentUser={setCurrentUser}
            />
          ) : <>Ошибка...</>
        }
      </Spin>

      <UserInfoPopup 
        user={currentUser} 
        close={closePopup} 
        open={active}
      />
    </div>
  )
}
