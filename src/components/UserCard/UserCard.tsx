import React, {FC} from 'react'
import styles from './userCard.module.css'
import { UserData } from '../../pages/Users';
import phoneIcon from '../../assets/phone.svg';
import mailIcon from '../../assets/mail.svg';

interface Props {
  userData: UserData,
  openPopup: () => void,
  setCurrentUser: (user: UserData) => void
}
export const UserCard: FC<Props> = ({userData, openPopup, setCurrentUser}) => {
  const {name, phone, email} = userData;
  return (
    <div className={styles.card} onClick={() => {
      setCurrentUser(userData);
      openPopup();
    }}>
      <h2 className={styles.title}>{name}</h2>
      <div className={styles.contacts}>
        <div className={styles.contactsRow}>
          <img src={phoneIcon} alt="close"/>
          <span className={styles.contact}>
            {phone}
          </span>
        </div>
        <div className={styles.contactsRow}>
          <img src={mailIcon} alt="close"/>
          <span className={styles.contact}>
            {email}
          </span>
        </div>
      </div>

    
    </div>
  )
}
