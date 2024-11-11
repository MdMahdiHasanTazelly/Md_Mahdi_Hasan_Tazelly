import React from 'react';

function Footer() {
    return (  
        <>
        <div className='footer-container'>
            <h2>Get Me in Touch</h2>
            <div className='footer-details'>
                <div className='footer-offer'>
                    <ul>
                        <li>
                            Do you need to build any digital products?
                        </li>
                        <li>
                            Do you want me to contribute in your codebase?
                        </li>
                        <li>
                            Are you looking for a co-worker or partner?
                        </li>
                    </ul>
                    <p><b>Reach me out! I'll get you within 48 hours!</b></p>
                </div>
                <div className='footer-contact'>
                    <ul>
                        <li>
                            <i class="fa-brands fa-whatsapp"></i>
                            &nbsp; &nbsp;
                            <span>+8801609544592</span>
                        </li>
                        <li>
                            <i class="fa-brands fa-telegram"></i>
                            &nbsp; &nbsp;
                            <span>+8801609544592</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-envelope"></i>
                            &nbsp; &nbsp;
                            <span>mahdihasantazelly@gmail.com</span>
                        </li>
                    </ul>

                    <div className='footer-social-container'>
                        <p>You can follow me on:</p>
                        <div className='footer-socials'>
                            
                            <a href='https://github.com/MdMahdiHasanTazelly' target='_blank'>
                                <i class="fa-brands fa-github"></i>
                            </a>
                            
                            <a href='https://x.com/MahdiTazelly' target='_blank'>
                               <i class="fa-brands fa-square-x-twitter"></i>
                            </a>
                           
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className='copyright'>
            <p>Made with <span>&hearts;</span> by Md Mahdi Hasan Tazelly</p>
            <p>&#64;2024 All Rights Reserved</p>
        </div>
        </> 
    );
}

export default Footer;