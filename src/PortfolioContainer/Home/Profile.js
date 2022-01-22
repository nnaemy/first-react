import React from 'react';

export default function Profile() {
    return ( 
        <div>
            <div className='profile-container'>
                <div className='profile-parent'>
                    
                        <div className='colz'>
                            <a href='https://www.facebook.com/fashionmedia63/'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='https://www.instagram.com/iadvertmedia/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='#'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCOekTmqwMDIc75EmJm5frsQ'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='https://twitter.com/nnaemy_media'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                            
                </div>
                
            </div>
            <div className='profile-details'>
                <span className='primary-text'>
                    {" "}
                    Hello I'M <span className='Highlighted-Text'>Edeh Johnpaul</span>
                </span>
            </div>
            <div className='profie-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop={infiniy}
                        steps={}
                        />
                    </h1>
                </span>
            </div>
        
        </div>
    
    )
}
