import './style.css'
import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <div className="card">
                <img src={Logo} alt="Logo show do milhão" className='logo' />

                <div className='info-box'>
                    <p className='title'>Hello, welcome to Data Quiz!<br />To start, type your name bellow.</p>
                    <input type="text" name="userName" className="userName" placeholder='Your name' required />
                    <Link to='/quiz' className='btn-container' >
                        <input value="Let's Start" className='initButton' />
                    </Link>
                </div>
            </div>
        </div>
    );
}