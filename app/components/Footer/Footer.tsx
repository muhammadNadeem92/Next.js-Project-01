import React from 'react'
import Style from './footer.module.css'
import { ST } from 'next/dist/shared/lib/utils'

const Footer = () => {
  return (
    <div>
    <footer className={Style.footer}>
        <h5 className={Style.h5}>feedback</h5>
     <input type="text" name='feedback' placeholder='feedback' className={Style.input} />
<br />
<p className={Style.p}>&copy; 2024 My First Next.js Website</p>
    </footer>
    </div>
  )
}

export default Footer