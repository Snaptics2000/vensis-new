import React, { useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { VscGitStashApply } from "react-icons/vsc";
import { MdOutlineMail } from "react-icons/md";
import bgImage from "../../../src/assets/images/bg.png"





import "./index.css"
import LatestJobs from '../LatestJobs';
import Navbar from '../Navbar';

const HomeBanner = () => {

    const [selectedOption, setSelectedOption] = useState(null);

    const handleRadioChange = (event) => {
        const newValue = event.target.id;
        setSelectedOption(newValue === selectedOption ? null : newValue);
    };

    const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  // Function to handle option selection for the first select button
  const handleSelect1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  // Function to handle option selection for the second select button
  const handleSelect2Change = (event) => {
    setSelectedOption2(event.target.value);
  };


    return (
        <>
        <Navbar/>
        <div className="main-banner">
            <div>
                <img src={bgImage} alt="banner-background" className="image-rotate" />
                <img src="https://jobslab-react.codebasket.xyz/assets/img/banner/banner-21.png" alt="banner-logo" className="banner-image-posistion" />
            </div>
            <div className="text-banner-card">
                <h1 className="main-head">Our Excellent Find Job
                    Best Career</h1>
                <p className="text-para">There are many variations passages of Lorem Ipsum Fasts
                    by injected humour, or randomised words which...</p>
                <div className='radio-card'>
                    <input
                        className="radio-button "
                        type="radio"
                        id="fulltimeId"
                        checked={selectedOption === 'fulltimeId'}
                        onChange={handleRadioChange}
                        style={{ transform: 'scale(1.5)', marginRight: '5px' }}
                    />
                    <label htmlFor="fulltimeId" className='one'>Full time</label>

                    <input
                        className="radio-button"
                        type="radio"
                        id="parttimeId"
                        checked={selectedOption === 'parttimeId'}
                        onChange={handleRadioChange}
                        style={{ transform: 'scale(1.5)', marginRight: '5px' }}
                    />
                    <label htmlFor="parttimeId">Part time</label>
                </div>
                <div className='input-text-card'>
                <div>
        <select className='items-selected' value={selectedOption1} onChange={handleSelect1Change}>
          <option value="">JobTitle</option>
          <option value="option1">Web Designer</option>
          <option value="option2">Ui/Ux Designer</option>
          <option value="option3">Digital Marketing</option>
        </select>
      </div>
      <div>
        <select className='items-selected' value={selectedOption2} onChange={handleSelect2Change}>
          <option value="">All category</option>
          <option value="option1">Healthcare</option>
          <option value="option2">Managment</option>
          <option value="option3">Marketing</option>
        </select>
      </div>
      <button className='main-search'>Search</button>
                </div>
            </div>
        </div>
        <div className='jobs-for-you-card'>
            <div className='flex-jobs-two-items-card'>
            <div className='main-suits-card'>
                <h1 className='jobs-head'>Suits Jobs For You</h1>
                <div className='line-text-flex'>
                    <div className='vertical-line'></div>
                    <p className='line-para icon-para'>There are many variations of passages of Lorem Ipsum Fasts Fastsby humour, by injected humour, or coved ceilings.</p>
                </div>
                <div className='icon-flex-card'>
                <CiBookmark className='icon-job' />
                <p className='icon-para'>Bookmark Jobs</p>
                </div>
                <div className='icon-flex-card'>
                <VscGitStashApply className='icon-job' />

                <p className='icon-para'>Apply with your resume</p>
                </div>
                <div className='icon-flex-card'>
                <MdOutlineMail className='icon-job' />

                <p className='icon-para'>Get notified</p>
                </div>
                <div>
                    <button className='browse-job-button'>Browse Jobs</button>
                </div>
            </div>
            <img src='https://jobslab-react.codebasket.xyz/assets/img/about/home-2-about-1.png' alt="job-image" className='job-image' />
            </div>
        </div>
        <LatestJobs/>
        </>
    )
}

export default HomeBanner;