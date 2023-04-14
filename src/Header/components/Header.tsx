import styles from './Header.module.scss'

export const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <button className={styles.headerButton}>すべて</button>
      <button className={styles.headerButton}>ルーム</button>
    </div>
  )
}
