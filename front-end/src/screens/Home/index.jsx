import './style.css'
import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <div className="card">
                <img src={Logo} alt="Logo show do milhão" className='logo' />

                <div className='info-box'>
                    <p className='title'>Olá, bem vindo ao Data Quiz!<br />Para começar, aperte no botão abaixo.</p>
                    <Link to='/quiz' className='btn-container' >
                        <input value="Vamos lá" className='initButton' />
                    </Link>
                </div>
            </div>
        </div>
    );
}