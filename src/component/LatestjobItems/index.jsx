import { CiLocationOn ,CiMoneyBill} from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";


const LatestjobItems = ({data})=>{
    const { id, role, compnay, technologyOne, technologyTwo, area, salary, type, icon, activeTabId } = data;
    return(
        <>
        <div >
        <div className="main-card-text-items">
            <div className="flex-items">
                <div className="main-icon-card">
                    <img src={icon} alt="compnay-logos" className="company-image"/>
                </div>
                <div className="main-head-jobs">
                    <h1 className="job-head">{role}</h1>
                    <p className="job-para">{compnay}</p>
                    <div className="technology-flex">
                        <div className="first-technology-card">
                            <p className="tech-card">{technologyOne}</p>
                        </div>
                        <div className="first-technology-card">
                            <p className="tech-card">{technologyTwo}</p>
                        </div>
                    </div>
                </div>
                <div className="vertical-line-job"></div>
                <div className="apply-button-card">
                    <button className="apply-button">Apply</button>
                </div>
            </div>
            <div className="horizantal-line"></div>
       <div className="job-end-card">
        <div className="flex-icon">
        <CiLocationOn size={20} />
        <p>{area}</p>
        </div>
        <div className="flex-icon">
        <CiMoneyBill size={25}  />
        <p>{salary}</p>
        </div>
        <div className="flex-icon">
        <IoTimeOutline size={20} />
        <p>{type}</p>
        </div>
       </div>
       </div>
      </div>
      </>
    )
}

export default LatestjobItems;