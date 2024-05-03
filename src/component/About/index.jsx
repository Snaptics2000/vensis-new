import Navbar from "../Navbar";
import {Link} from 'react-router-dom'
import { IoLayersOutline,IoDiamondOutline } from "react-icons/io5";
import { FaCopy } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { BiSolidCopyAlt } from "react-icons/bi";




import './index.css'
import Footer from "../Footer";

const About = () =>{
    return(
        <>
        <Navbar/>
        <div>
            <div className="main-about-image">
                <div className="main-text-card">
                <h1 ><Link className="link-item" to="/">Home</Link>/About</h1>
                </div>
            </div>
            <div className="about-card">
                <div className="flex-items">
                    <div>
                    <h1 className="about-head">Our AboutUs</h1>
                    <h1 className="about-head2">We Provides Best Job Solution.</h1>
                    <p className="about-para">There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum.</p>
                    <div className="flex-about-cards">
                        <div className="abouts-services-card">
                            <div className="flex-about-icons">
                            <IoLayersOutline className="about-icon" />
                            <h1 className="about-icon-head">Software Development</h1>
                            </div>
                            <p className="about-icon-para">
                            There are many variations of passages of corem Ipsum.
                            </p>
                        </div>
                        <div className="abouts-services-card">
                            <div className="flex-about-icons">
                            <FaCopy className="about-icon" />
                            <h1 className="about-icon-head">Service Development</h1>
                            </div>
                            <p className="about-icon-para">
                            There are many variations of passages of corem Ipsum.
                            </p>
                        </div>
                    </div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1714727852/d9st3mwl4d9dbmrplsf4.jpg" className="image-about" alt="profile"/>
                        <img src="https://res.cloudinary.com/djo2jovhh/image/upload/v1714727851/pzeudsucowyp5rikua7p.jpg" className="image-about2" alt="profile"/>
                     </div>
                </div>
            </div>
        </div>
        <div className="features-card">
            <div className="flex-card-items"> 
                <div>
                    <img src="https://blogbymichele.files.wordpress.com/2023/04/success.jpg?w=900" alt="profile"/>
                </div>
                <div className="right-text-card">
                    <h1 className="features-head">SUCCESS</h1>
                    <h1 className="features-head2">Delivering The Best Result For Our Users!</h1>
                    <p className="features-para">All jobs, resumes and companies are reviewed before they get published in order to deliver quality possible to all of our users.</p>
                    <div className="flex-card-icons">
                        <div>
                        <CiUser size={65} color="#4C2F82" />
                        <h1 className="icon-head-end">140+</h1>
                        <p className="icon-para-end">Pro Member</p>
                        </div>
                        <div>
                        <IoDiamondOutline size={65} color="#4C2F82" />
                        <h1 className="icon-head-end">250+</h1>
                        <p className="icon-para-end">Jobs</p>
                        </div>
                        <div>
                        <BiSolidCopyAlt  size={65} color="#4C2F82"/>
                        <h1 className="icon-head-end">199+</h1>
                        <p className="icon-para-end">Resumes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       <Footer/>
        </>
    )
}

export default About;