import React from 'react'
import Style from './headerStyle/header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className={Style.header}>
        <nav>
            <ul className={Style.ul}>
                <li className={Style.li}><Link href="./" className={Style.link}>Home</Link></li>
                <li  className={Style.li}><Link href="./about" className={Style.link}>About</Link></li>
                <li  className={Style.li}><Link href="./contact" className={Style.link}>Contact</Link></li>
                <li  className={Style.li}><Link href="./services" className={Style.link}>Services</Link></li>
            
                <div className={Style.search}>
               
            <input type="text" name='search' id='search' placeholder='   search something here ' className={Style.input}/>
        </div>
            </ul>
        </nav>
       <div> 
        <h1 className={Style.h1}>Welcome To Landing Page</h1><br />
        <p className={Style.p}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis magni iure sapiente numquam velit laudantium soluta hic harum, officiis voluptatibus impedit officia molestias aspernatur dolorum beatae dicta neque! Expedita, tempore?</p>
        <br />
        <h2 className={Style.h2}>This is a Header</h2>
       </div> 
        </header>
       
    </div>
  )
}

export default Header