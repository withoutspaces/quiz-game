import './style.css'
import Logo from '../../assets/logo.jpg'

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='container'>
            <div className="card">
                <img src={Logo} alt="Logo show do milhão" className='logo'/>
                <div>
                    <h3 className='title'>Ma-Maoe, bem-vindo ao <br/>Show do Milhão</h3>
                </div>
                <input type="text" name="userName" className="userName" placeholder='Digite seu nome' />
                <Link to='/quiz'  className='btn-container' >
                    <input type="button" value="Iniciar" className='initButton'/>
                </Link>
                
            </div>
        </div>
    );
}