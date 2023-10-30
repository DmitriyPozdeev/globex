
import styles from './app.module.css';
import { Users } from './pages/Users';


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.pageWrapper}>
        <Users/>
      </div>
    </div>
    
  )
}

export default App
