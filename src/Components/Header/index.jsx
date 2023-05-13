import './styles.scss'
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return <header className='header'>
      <img width={75} style={{ marginRight: 10 }} src="https://www.freepnglogos.com/uploads/logo-home-png/house-logo-design-vector-real-estate-logo-photos-25.png" alt="" />
      <h3 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Namma Stays</h3>
    </header>
}

export default Header;


