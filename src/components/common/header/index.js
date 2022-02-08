import React from 'react';
import './header.css'


const Header = () => {
  return(
      <div className='lead-header'>
            <div className='header max-width'>
                <div className='logo absolute-center cur-po'>
                    <img className='header-logo' src='https://cdn-icons-png.flaticon.com/32/854/854894.png' alt="google.com"></img>
                    <h1 className='logo-name'>Culture</h1>
                </div>
                <div className='header-right'>
                        <div className='navbar cur-po'>
                            <div className='item'>
                                Travel
                            </div>
                            <div className='item'>
                                Experiences
                            </div>
                            <div className='item'>
                                Blogs
                            </div>
                        </div>
                    <div className='account cur-po'>
                        <img className='account-image' src='https://cdn-icons.flaticon.com/png/512/4283/premium/4283171.png?token=exp=1644351184~hmac=7aaa7855f4232b242eb3b8d05fb376f3' alt="google.com"></img>
                        <div className='account-info'>
                            <p className='account-name'>Abhishek</p>
                            <i class="fi fi-rr-angle-small-down"></i>
                        </div>
                    </div>
              </div>
            </div>
      </div>
  )};
export default Header;
