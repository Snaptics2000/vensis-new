import './index.css'

const Footer = () => {
    return (
        <div className="footer-card">
            <div className='main-footer-flex'>
                <div>
                    <h1>Logo</h1>
                    <p className='footer-para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantiu doloremque laudantium</p>
                </div>
                <div>
                    <h1>Useful Link</h1>
                    <div className='flex-items'>
                    <div>
                    <p className='footer-para1'>About Us</p>
                    <p className='footer-para1'>Services</p>
                    <p className='footer-para1'>Browse Jobs</p>
                    </div>
                    <div>
                    <p className='footer-para1'>Candidates</p>
                    <p className='footer-para1'>Contact Us</p>
                    </div>
                    </div>
                </div>
                <div>
                    <h1>Contact</h1>
                    <p className='footer-para'>!234567890</p>
                    <p className='footer-para'>info@gmail.com</p>

                </div>
            </div>
        </div>
    )
}

export default Footer;