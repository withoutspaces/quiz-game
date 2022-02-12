import './style.css'
import Logo from '../../assets/logo.png'

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <div className="card">
                <img src={Logo} alt="Logo show do milhão" className='logo'/>
                
                <div className='info-box'>
                    <p className='title'>Olá, seja bem-vindo ao Data Quiz! <br/> Para iniciarmos, digite seu nome</p>
                    <input type="text" name="userName" className="userName" placeholder='Digite seu nome' />
                    <Link to='/quiz'  className='btn-container' >
                        <input type="button" value="Começar" className='initButton'/>
                    </Link> 
                </div>
            </div>
        </div>
    );
}