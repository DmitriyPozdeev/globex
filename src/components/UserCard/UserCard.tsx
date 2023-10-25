import React, {FC} from 'react'
import styles from './userCard.module.css'
import { UserData } from '../UserList/UserList'

interface Props {
  userData: UserData
}
export const UserCard: FC<Props> = ({userData}) => {
  const {id, name, phone, email, recruitment, post, dept} = userData;
  return (
    <div className={styles.card} key={id}>
      <h2 className={styles.title}>{name}</h2>
      <span>{ phone}</span>
      <span>{email}</span>
      <span>{recruitment}</span>
      <span>{post}</span>
      <span>{dept}</span>
    </div>
  )
}
