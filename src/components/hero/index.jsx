import React from 'react'
import styles from './index.module.css'
import Joker from '../../assets/images/joker.png'
import Wrapper from '../UI/wrapper'
const Hero = () => {
  return (
    <div className={styles.div}>
        <img className={styles.joker} src={Joker} alt="Joker" />
        <Wrapper>
        <div className={styles.welcome}>
                <div className={styles.texts}>
                    <h2>Welcome</h2>
                    <p>Your Movies,Shows,Documentaries and All</p>
                </div>
                <div className={styles.search}>
                          <input placeholder='Search for a movie, tv show...' type="text" />
                          <button>Search</button>
                </div>
        </div>

        </Wrapper>
    </div>
  )
}

export default Hero