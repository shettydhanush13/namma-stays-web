import './styles.scss'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return <header className='header'>
      <h3 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Namma Stays</h3>
    </header>
}

export default Header;


