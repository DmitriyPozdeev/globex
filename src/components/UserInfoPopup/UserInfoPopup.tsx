import React, { FC} from 'react';
import styles from './userInfoPopup.module.css'
import { UserData } from '../../pages/Users';
import closeIcon from '../../assets/close.svg';

interface Props {
  user: UserData
  close: () => void,
  open: boolean
}
export const UserInfoPopup: FC<Props> = ({ close, open, user}) => {
  const {name,phone,email,hire_date,position_name,department, address} = user;
  return (
    <div 
      className={
        open ? `${styles.popupOverlay} ${styles.active}` : styles.popupOverlay 
      } 
      onClick={close}
    >
      <div className={open ? `${styles.popup} ${styles.active}` : styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.cardTitleWrapper}>
          <span className={styles.cardTitle}>{name}</span>
          <img 
            className={styles.closeIcon} 
            src={closeIcon} 
            onClick={close} 
            alt="close"
          />
        </div>
 
        <div className={styles.infoRow}>
          <div className={styles.infoTitleWrapper}>
            <span className={styles.infoTitle}>
              Телефон:
            </span>
          </div>
          <div className={styles.infoValueWrapper}>
            <span className={styles.infoValue}>
              {phone}
            </span>
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoTitleWrapper}>
            <span className={styles.infoTitle}>
              Почта:
            </span>
          </div>
          <div className={styles.infoValueWrapper}>
            <span className={styles.infoValue}>
              {email}
            </span>
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoTitleWrapper}>
            <span className={styles.infoTitle}>
              Дата приема:
            </span>
          </div>
          <div className={styles.infoValueWrapper}>
            <span className={styles.infoValue}>
              {hire_date}
            </span>
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoTitleWrapper}>
            <span className={styles.infoTitle}>
              Должность:
            </span>
          </div>
          <div className={styles.infoValueWrapper}>
            <span className={styles.infoValue}>
              {position_name}
            </span>
          </div>
        </div>
        <div className={styles.infoRow}>
        <div className={styles.infoTitlesWrapper}>
            <span className={styles.infoTitle}>
              Подразделение:
            </span>
          </div>
          <div className={styles.infoValuesWrapper}>
            <span className={styles.infoValue}>
              {department}
            </span>
          </div>
        </div> 
        <div  className={styles.additionalInfo}>
          <p className={styles.additionalInfoTitle}>
            Дополнительная информация
          </p>
          <p className={styles.additionalInfoText}>
            {address}
          </p>
        </div >
      </div>
   
       
      </div>
  )
}
