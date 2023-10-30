import React, {FC} from 'react';
import styles from './spin.module.css';
import loadIcon from '../../assets/loading.png'

interface Props {
  active: boolean
  children : JSX.Element
}
export const Spin: FC<Props> = ({active, children}) => {
  return (
    <div 
      className={
        active ? 
          `${styles.wrapper} ${styles.active}`: 
            styles.wrapper
      }
    >
      {children}
      <img 
        src={loadIcon} 
        alt="loading" 
        className={
          active ? 
            `${styles.iconLoad} ${styles.active}`: 
              styles.iconLoad
        }
      />
    </div>
  )
}
