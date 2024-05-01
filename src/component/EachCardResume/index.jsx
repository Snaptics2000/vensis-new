import './index.css'

const EachcardResume = ({details}) =>{
    const {id,profile,profileHead,profilePara}=details;
    return(
        <div className='resume-card'>
            <div className='main-reume-text'>
            <img src={profile} alt="profile"/>
            <h1 className='profile-head'>{profileHead}</h1>
            <p className='profile-para'>{profilePara}</p>
        </div>
        </div>
    )
}

export default EachcardResume;