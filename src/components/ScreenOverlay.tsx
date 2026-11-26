import styles from './ScreenOverlay.module.css'

export function ScreenOverlay() {
  return (
    <>
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.scanlines} aria-hidden="true" />
    </>
  )
}
