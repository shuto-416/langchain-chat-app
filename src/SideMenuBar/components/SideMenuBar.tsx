import { FaUser, FaComments, FaCog } from 'react-icons/fa'

import styles from './SideMenuBar.module.scss'

export const SideMenuBar = (): JSX.Element => {
  return (
    <div className={styles.manuBar}>
      <div className={styles.menuItemWrap}>
        <FaUser className={styles.menuItem} />
        <FaComments className={styles.menuItem} />
        <FaCog className={styles.menuItem} />
      </div>
    </div>
  )
}
