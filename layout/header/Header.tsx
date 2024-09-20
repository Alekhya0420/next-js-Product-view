import React from 'react'
import styles from '../../src/styles/layout.module.css'
import Link from 'next/link'

const Header = () => {
  return (

    <nav className={styles.header}>
        <ul className={styles.myul}>
            <li className={styles.navlink}><Link href="/" >Home</Link></li>
            <li className={styles.navlink}><Link href="/about" >About</Link></li>
            <li className={styles.navlink}><Link href="/detail" >Register</Link></li>
            <li className={styles.navlink}><Link href="/login" >Login</Link></li>
            <li className={styles.navlink}><Link href="/profile">Profile</Link></li>
            <li className={styles.navlink}><Link href="/reset">Reset</Link></li>
        </ul>
    </nav>
    
  )
}

export default Header