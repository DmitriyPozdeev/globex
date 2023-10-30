import React, {FC} from 'react'
import styles from './userList.module.css'
import { UserCard } from '../UserCard/UserCard'
import { UserData } from '../../pages/Users'
import { v4 as uuidv4 } from 'uuid';

interface Props {
  users: UserData[],
  openPopup: () => void,
  setCurrentUser: (user: UserData) => void
}
export const UserList: FC<Props> = ({users, openPopup, setCurrentUser}) => {
  return (
    <>
      {
        users.length > 0 ? (
          <div className={styles.userList}>
            {
               users.map((userData) => {
                return (
                  <UserCard 
                    userData={userData} 
                    key={uuidv4()} 
                    openPopup={openPopup} 
                    setCurrentUser={setCurrentUser}
                  />
                )
              })
            }
          </div>
        ) : <>Пользователи не найдены</>
       
      }
    </>
  )
}
