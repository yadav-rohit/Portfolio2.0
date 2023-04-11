import Image from 'next/image';
import React from 'react'
import { BsXLg , BsListNested } from "react-icons/bs";
import { transform } from 'typescript';

export default function Navbar() {
    const [nav_visible , setnav_visible] = React.useState("false");
    const togglenav = () => {
        setnav_visible( nav_visible === "true" ? "false" : "true");
        set_innertext( nav_visible === "true" ? "Open" : "Menu");
    } 
    const [innerText , set_innertext] = React.useState('open') ;
    const heloo = "50";

  
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
    console.log(position.x , position.y);
  };

  return (<div className="main" data-nav={nav_visible}>
  <button onClick={togglenav} className="flex justify-center items-center toogle_button fixed h-[4.2em] w-[4.2em] bottom-[2%] left-[50%] -translate-x-[50%] z-[3] bg-[#f96c5d] rounded-full hover:bg-[#da5e50] hover:scale-105 transition-all ease-linear active:scale-100  active:bg-[#f96c5d] shadow-sm shadow-orange-300">
        <div className='toggle_text'>
            {innerText.split("").map(
                (char , i) => {
                 return   <span key={i} style={{rotate: `${i*8}deg`}}>{char}</span>
                //  <span key={i} style={{transform: `rotate(${i*8.3})`}}>{char}</span> 
                }
            )}   
        </div>
        <BsListNested className='open tg_button'/>
        <BsXLg className='close tg_button'/>
        </button>
    <nav className='navb flex w-full p-5 relative -translate-y-[100%] overflow-visible h-[50vh] bg-[#1c1c1cd3] z-[2]'>
        <div className={`nav_links flex h-fit w-fit gap-4 -translate-x-[${position.x/10}px]`} onMouseOver={handleMouseMove} onMouseMove={handleMouseMove} >
        <a className='nav_link ' href='#'>
            <h2 className='navlink_label text-xl my-2 '>Home</h2>
            <Image
            className='rounded-lg navlink_img '
    alt="The guitarist in the concert."
    src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
    width={400}
    height={300}
/>
        </a>
        <a className='nav_link ' href='#'>
            <h2 className='navlink_label text-xl my-2 '>Home</h2>
            <Image
            className='rounded-lg navlink_img'
    alt="The guitarist in the concert."
    src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
    width={400}
    height={400}
/>
        </a>
        <a className='nav_link' href='#'>
            <h2 className='navlink_label text-xl my-2 '>Home</h2>
            <Image
            className='rounded-lg navlink_img'
    alt="The guitarist in the concert."
    src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
    width={1000}
    height={400}
/>
        </a>
        <a className='nav_link' href='#'>
            <h2 className='navlink_label text-xl my-2 '>Home</h2>
            <Image
            className='rounded-lg navlink_img'
    alt="The guitarist in the concert."
    src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
    width={1000}
    height={400}
/>
        </a>
        <a className='nav_link' href='#'>
            <h2 className='navlink_label text-xl my-2 '>Home</h2>
            <Image
            className='rounded-lg navlink_img'
    alt="The guitarist in the concert."
    src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
    width={1000}
    height={400}
/>
        </a>
        </div>
        </nav>
        </div>
  )
}
