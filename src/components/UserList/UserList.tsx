import React, {FC} from 'react'
import styles from './userList.module.css'
import { UserCard } from '../UserCard/UserCard'
import { UserListRow } from '../UserListRow/UserListRow'

export interface UserData {
  id: number,
  name: string,
  phone: string,
  email: string,
  recruitment: string,
  post: string,
  dept: string
}
const users: UserData[] = [
  {
    id: 0,
    name: 'Клара',
    phone: '98945345354',
    email: 'fsdfs@dsfdf.vcxv',
    recruitment: '12.03.23',
    post: 'manager',
    dept: 'управление'
  },
  {
    id: 1,
    name: 'Клара',
    phone: '98945345354',
    email: 'fsdfs@dsfdf.vcxv',
    recruitment: '12.03.23',
    post: 'manager',
    dept: 'управление'
  },
  {
    id: 2,
    name: 'Саня',
    phone: '98945345354',
    email: 'fsdfs@dsfdf.vcxv',
    recruitment: '12.03.23',
    post: 'manager',
    dept: 'управление'
  },
  {
    id: 3,
    name: 'Клара',
    phone: '98945345354',
    email: 'fsdfs@dsfdf.vcxv',
    recruitment: '12.03.23',
    post: 'manager',
    dept: 'управление'
  },
  {
    id: 4,
    name: 'Игорь',
    phone: '98945345354',
    email: 'fsdfs@dsfdf.vcxv',
    recruitment: '12.03.23',
    post: 'manager',
    dept: 'управление'
  },
]
export const UserList: FC = () => {
  return (
    <div className={styles.userList}>
      {
        <UserListRow>
          {
             users.map((userData) => {
              return <UserCard userData={userData}/>
            })
          }
        </UserListRow>
       
      }
    </div>
  )
}
