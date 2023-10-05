import React from 'react'
import styles from './index.module.css'
import Wrapper from '../../UI/wrapper'
const Header = () => {
  return (
      <Wrapper>
    <div className={styles.background}>

        <div className={styles.nav}>
              <div className={styles.logo}>
                  <h2>LOGO</h2>
              </div>
              <div className={styles.main}>
                  <ul>
                    <li>Movies</li>
                    <li>Main</li>
                    <li>Collections</li>
                    <li>Series</li>
                  </ul>
              </div>
              <div className={styles.signin}>
                  <input placeholder='Search' type="text" />
                  <button>Sign In</button>
              </div>
        </div>
    </div>
      </Wrapper>
  )
}

export default Header
