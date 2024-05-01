import React, { useEffect, useState } from "react";
import "./index.css";
import LatestjobItems from "../LatestjobItems";
import {
  CiDeliveryTruck, CiUser, CiSearch, CiFacebook, CiLinkedin,
} from "react-icons/ci";
import { FcSalesPerformance } from "react-icons/fc";
import { MdCallEnd, MdOutlineCrisisAlert } from "react-icons/md";
import { FaChalkboardTeacher, FaInstagram } from "react-icons/fa";
import { VscGitStashApply } from "react-icons/vsc";
import { GrTechnology } from "react-icons/gr";
import { AiOutlineLike } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import Footer from "../Footer";
import EachcardResume from "../EachCardResume";




const listItemsDetails = [
  {
    id: 1,
    role: "IOS Developer",
    compnay: "Apple",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/apple.png",
    activeTabId: "All",
  },
  {
    id: 2,
    role: "IOS Developer",
    compnay: "Apple",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/google.png",
    activeTabId: "All",
  },
  {
    id: 3,
    role: "IOS Developer",
    compnay: "Apple",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/starbuck.png",
    activeTabId: "All",
  },
  {
    id: 4,
    role: "IOS Developer",
    compnay: "Apple",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/volkswagen.png",
    activeTabId: "All",
  },
  {
    id: 5,
    role: "IOS Developer",
    compnay: "Apple",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/nike.png",
    activeTabId: "All",
  },
  {
    id: 6,
    role: "IOS Developer",
    compnay: "Apple",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/meta.png",
    activeTabId: "All",
  },
  {
    id: 7,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/google.png",
    activeTabId: "Full Time",
  },
  {
    id: 8,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/apple.png",
    activeTabId: "Full Time",
  },
  {
    id: 9,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/volkswagen.png",
    activeTabId: "Full Time",
  },
  {
    id: 10,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/nike.png",
    activeTabId: "Full Time",
  },
  {
    id: 11,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/google.png",
    activeTabId: "Part Time",
  },
  {
    id: 12,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/google.png",
    activeTabId: "Part Time",
  },
  {
    id: 13,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/starbuck.png",
    activeTabId: "Part Time",
  },
  {
    id: 14,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/meta.png",
    activeTabId: "Part Time",
  },
  {
    id: 15,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/apple.png",
    activeTabId: "Remote",
  },
  {
    id: 16,
    role: "Web Developer",
    compnay: "Google",
    technologyOne: "NextJs",
    technologyTwo: "ReactJs",
    area: "Hyderabad,India",
    salary: "3.5 to 4.5 LPA",
    type: "Full Time",
    icon: "https://jobslab-react.codebasket.xyz/assets/img/job/google.png",
    activeTabId: "Remote",
  },
];

const moreJobDetails = [
  {
    id: 1,
    name: "delivery Jobs",
    year: 2024,
    text: "Jobs are posted",
    icons: <CiDeliveryTruck />
  },
  {
    id: 2,
    name: "Sales",
    year: 2024,
    text: "Jobs are posted",
    icons: <MdOutlineCrisisAlert />
  },
  {
    id: 3,
    name: "Call Centers",
    year: 2024,
    text: "Jobs are posted",
    icons: <MdCallEnd />

  },
  {
    id: 4,
    name: "Teacher/Lecturer",
    year: 2024,
    text: "Jobs are posted",
    icons: <FaChalkboardTeacher />
  },
]
const ChooseWork = [
  {
    id: 1,
    mainText: "Register",
    mainPara: "Create a account as Employer or a Candidate for free.",
    mainIcon: <CiUser />,
  },
  {
    id: 2,
    mainText: "Search",
    mainPara: "Browse throught positions to find the right job for you.",
    mainIcon: <CiSearch />,
  },
  {
    id: 3,
    mainText: "Apply Jobs",
    mainPara: "Apply to a job with your resume and change your Career.",
    mainIcon: <VscGitStashApply />,
  },
  {
    id: 4,
    mainText: "Creative Technologies",
    mainPara: "Gain a business in the most advanced IoT solutions.",
    mainIcon: <GrTechnology />,
  },
  {
    id: 5,
    mainText: "Top Rated Companies",
    mainPara: "Find The Best Top Rated Companies in your Local area",
    mainIcon: <AiOutlineLike />,
  },
  {
    id: 6,
    mainText: "24/7 Customer Support",
    mainPara: "self-service banking extending cash in you band.",
    mainIcon: <RiCustomerService2Fill />,
  },
]

const resumeTabs = [
  {
    id: 1,
    profile: "https://jobslab-react.codebasket.xyz/assets/img/services/step-1.png",
    profileHead: "Set Up Yoyr Profile All",
    profilePara: "After signing up to TechCareer, you start to set up your profile and find the hottest & latest tech jobs.",
    activeTabs: "One",
  },
  {
    id: 2,
    profile: "https://jobslab-react.codebasket.xyz/assets/img/services/step-2.png",
    profileHead: "Create A Pro CV",
    profilePara: "Techcareer gives you more than 500 pre-made CV samples for candidates to personalize their CVs.",
    activeTabs: "Two",
  },
  {
    id: 3,
    profile: "https://jobslab-react.codebasket.xyz/assets/img/services/step-3.png",
    profileHead: "Get Applied",
    profilePara: "When owning a CV, don't hesitate to submit your CV to easily apply for a job from Tech companies.",
    activeTabs: "Three",
  },
]

const LatestJobs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [mainavtveTabId, setMainAvtiveTabId] = useState("One");
  const [activeBtn,setActiveBtn] = useState(false);

  // Function to handle button click and update the active tab
  const handleButtonClick = (tab) => {
    setActiveTab(tab);
    
  };
  const handleButtonClickOne = (tabs)=>{
    setMainAvtiveTabId(tabs)
    setActiveBtn(tabs)
  }

  useEffect(() => {
    setActiveTab("All");
    setMainAvtiveTabId("One")
    setActiveBtn("One")
  }, []);

  const filteredItems =
    activeTab === "All"
      ? listItemsDetails.filter((item) => item.activeTabId === activeTab)
      : listItemsDetails.filter((item) => item.activeTabId === activeTab);
  const filteredTabId = mainavtveTabId === "One" ? resumeTabs.filter((item) => item.activeTabs === mainavtveTabId) : resumeTabs.filter((item) => item.activeTabs === mainavtveTabId)
  return (
    <>
      <div className="main-latest-jobs-card">
        <div className="main-flex-center-jobs-card">
          <div className="text-cards">
            <h1>Latest Jobs</h1>
            <p>
              Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur
              vehicula
            </p>
          </div>
        </div>
        <div className="main-list-card">
          <div className="flex-buttons">
            <button
              onClick={() => handleButtonClick("All")}
              className="button-card"
            >
              All
            </button>
            <button
              onClick={() => handleButtonClick("Full Time")}
              className="button-card"
            >
              Full Time
            </button>
            <button
              onClick={() => handleButtonClick("Part Time")}
              className="button-card"
            >
              Part Time
            </button>
            <button
              onClick={() => handleButtonClick("Remote")}
              className="button-card"
            >
              Remote
            </button>
          </div>
          <div className="main-list-jobs-card">
            {filteredItems.map((eachItem) => (
              <LatestjobItems key={eachItem.id} data={eachItem} />
            ))}
          </div>
        </div>
        <div className="more-card-jobs">
          {moreJobDetails.map((eachJob) => (
            <div className="job-more-flex-card">
              <div className="job-card-more">
                <h1 className="icon-head">{eachJob.icons}</h1>

                <h1 className="more-job-head">{eachJob.name}</h1>
                <div><span className="first-span">{eachJob.year}</span> <span className="second-span">{eachJob.text}</span></div>
              </div>
            </div>
          ))}
        </div>
        <div className="choose-work-card">
          <div className="work-card-flex">
            <div className="flex-center-card">
              <h1 className="main-work-head">Choose Your Work</h1>
              <p className="main-work-para">Find jobs on the work that suits you the most</p>
              <button className="view-more-jobs">View More Jobs</button>
            </div>
            <div>
              <div className="main-flex">
                {ChooseWork.map((eachWork) => (
                  <div className="main-work-card">
                    <h1 className="main-each-head">{eachWork.mainIcon}</h1>
                    <h1 className="work-item-head">{eachWork.mainText}</h1>
                    <p className="each-para">{eachWork.mainPara}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="testmonial-card">
          <h1 className="candiate-head">Featured Candidates</h1>
          <p className="candidate-para">Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
          <div className="main-test-flex-card">
            <div className="main-testmonial-card">
              <div className="main-test-texts">
                <img src="https://jobslab-react.codebasket.xyz/assets/img/team/5.jpg" alt="testmonial-logo" className="test-image" />
                <h1>Jon William</h1>
                <p>Web Developer (6 Yrs Exp)</p>
                <div className="icons-flex">
                  <div className="icon-card-one">
                    <CiFacebook className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <CiLinkedin className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <FaInstagram className="icon-one" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-testmonial-card">
              <div className="main-test-texts">
                <img src="https://jobslab-react.codebasket.xyz/assets/img/team/5.jpg" alt="testmonial-logo" className="test-image" />
                <h1>Chris Henry</h1>
                <p>Web Developer (6 Yrs Exp)</p>
                <div className="icons-flex">
                  <div className="icon-card-one">
                    <CiFacebook className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <CiLinkedin className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <FaInstagram className="icon-one" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-testmonial-card">
              <div className="main-test-texts">
                <img src="https://jobslab-react.codebasket.xyz/assets/img/team/5.jpg" alt="testmonial-logo" className="test-image" />
                <h1>Alexander</h1>
                <p>Web Developer (6 Yrs Exp)</p>
                <div className="icons-flex">
                  <div className="icon-card-one">
                    <CiFacebook className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <CiLinkedin className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <FaInstagram className="icon-one" />
                  </div>
                </div>
              </div>
            </div>
            <div className="main-testmonial-card">
              <div className="main-test-texts">
                <img src="https://jobslab-react.codebasket.xyz/assets/img/team/5.jpg" alt="testmonial-logo" className="test-image" />
                <h1>Jennifer</h1>
                <p>Web Developer (6 Yrs Exp)</p>
                <div className="icons-flex">
                  <div className="icon-card-one">
                    <CiFacebook className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <CiLinkedin className="icon-one" />
                  </div>
                  <div className="icon-card-one">
                    <FaInstagram className="icon-one" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pramotin-jobs">
          <div className="main-flex-items">
            <div className="left-text-card">
              <h1 className="pramotin-head">Promoting Career</h1>
              <p className="promotin-para">There are many variations of passages of Lorem Ipsum Fasts There are many variations of passages of Lorem Ipsum Fastsby injected humour fasts there</p>
              <button className="view-more-jobs">Browse Job</button>
            </div>
            <div>
              <div className="flex-items-all">
                <div className="smalll-horizantal-line"></div>
                <div>
                  <button className={activeBtn ==="One" ?"btn-color": "step-one-button"} onClick={() => handleButtonClickOne("One")}>Step One</button>
                  <button className={activeBtn ==="Two" ? "btn-color":"step-one-button"} onClick={() => handleButtonClickOne("Two")}>Step Two</button>
                  <button className={activeBtn ==="Three" ? "btn-color":"step-one-button"} onClick={() => handleButtonClickOne("Three")}>Step Three</button>
                </div>
                <div className="smalll-horizantal-line"></div>
              </div>
              <div className="resume-card-bitton">
                {filteredTabId.map((eachTab)=>(
                  <EachcardResume key={eachTab.id} details={eachTab}/>
                ))}
              </div>
            </div>
          </div>
         
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default LatestJobs;
