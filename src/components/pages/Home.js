import React from 'react'
import '../css/Home.css'
import user from '../images/User_img.png'
import Footer from './Footer'
import Header from './Header'

const Home = () => {

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='img-section'>
                <div className='container'>
                    <div>
                        <img className='img' alt='' src={user} />
                    </div>
                    <div>
                        <button className='btn'><a className='text-deco' href='/adduser'>ADDUSER</a></button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;