import React, {FC} from 'react';
import styles from './userListRow.module.css';
interface Props {
  children: JSX.Element | JSX.Element[]
}
export const UserListRow: FC<Props> = ({children}) => {
  return (
    <div className={styles.row}>
      {children}
    </div>
  )
}
