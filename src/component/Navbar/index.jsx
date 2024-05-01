
import { useState } from "react";
import { stagger, animate } from "framer-motion"
import { motion } from 'framer-motion';
import { FaPen } from "react-icons/fa";
import { IoIosArrowDropright } from "react-icons/io";
import {Link} from 'react-router-dom'
import "./index.css";


const submenuVariants = {
    hidden: { x: -500, opacity: 0 }, // Initial state
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }, // Visible state with animation
  };


const Navbar = () => {
    const [openSubmenu,setopenSubmenu] = useState(false);

 return (
   <nav className="main-nav">
    <div className="flex-main-nav">
    <div className="logo-container"><h1>LOGO</h1></div>
    <div className="main-card" onMouseEnter={()=>setopenSubmenu(true)} onMouseLeave={()=>setopenSubmenu(false)}>
        <h1 className="category-card" >Category</h1>
        {openSubmenu && (
             <motion.div className="category-submenu" initial="hidden"
             animate="visible"
             variants={submenuVariants}
             >
        <div className="main-submenu-card">
            <div className="left-ietms">
             <div className="submenu-items">
            <div className="icon-card">
             <FaPen className="main-icon" />
             </div>
             <div >
                <h1 className="item-head">UI/UX Design <br/> <span className="span-item">12k+ Jobs</span></h1>
               
             </div>
             </div>
             <div className="submenu-items">
            <div className="icon-card">
             <FaPen className="main-icon" />
             </div>
             <div >
                <h1 className="item-head">UI/UX Design <br/> <span className="span-item">12k+ Jobs</span></h1>
               
             </div>
             </div>
             <div className="submenu-items">
            <div className="icon-card">
             <FaPen className="main-icon" />
             </div>
             <div >
                <h1 className="item-head">UI/UX Design <br/> <span className="span-item">12k+ Jobs</span></h1>
               
             </div>
             </div>
             </div>

             <div className="left-ietms">
             <div className="submenu-items">
            <div className="icon-card">
             <FaPen className="main-icon" />
             </div>
             <div >
                <h1 className="item-head">UI/UX Design <br/> <span className="span-item">12k+ Jobs</span></h1>
               
             </div>
             </div>
             <div className="submenu-items">
            <div className="icon-card">
             <FaPen className="main-icon" />
             </div>
             <div >
                <h1 className="item-head">UI/UX Design <br/> <span className="span-item">12k+ Jobs</span></h1>
               
             </div>
             </div>
             <div className="submenu-items">
            <div className="icon-card">
             <FaPen className="main-icon" />
             </div>
             <div >
                <h1 className="item-head">UI/UX Design <br/> <span className="span-item">12k+ Jobs</span></h1> 
             </div>
             </div>
             </div>
             </div>
             <div className="last-head-card">
                <h1 className="last-head">Explore all fields </h1>
                <IoIosArrowDropright className="fileds-icon" />
             </div>
           </motion.div>
        )}
    </div>
    <div className="nav-list-items-card">
        <Link className="link-item" to="/"><p className="items">Home</p></Link>
        <Link className="link-item" to="/about"><p className="items">About</p></Link>
        <p className="items">Explore</p>
        <p className="items" >Blog</p>
        <p className="items">Contact</p>
        <p className="items">Dashboard</p>
        <p className="items">Post Job</p>
    </div>
    <div className="nav-button-card">
        <div>
        <button className="login-button">Login</button>
        </div>
        <button className="hire-button">Hire Top Talents</button>
    </div>
    </div>
    
   </nav>
 );
};

export default Navbar;