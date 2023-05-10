import './styles.scss'
import Header from '../../Components/Header'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Chip from '@mui/material/Chip';
import { useLocation } from "react-router-dom";

const Homestay = () => {
    const { state } = useLocation();
    return <>
    <Header/>
    <section className='homestayDescription'>
        <h1>{state.name}</h1>
        <div className='contacts'>
            <p><i className="fa fa-envelope"/>{state.email}</p>
            <p><i className="fa fa-phone"/>{state.phone}</p>
            <p><i className="fa fa-globe"/>{state.website}</p>
        </div>
        <p className='type'>
            <a href={state.map} target="_blank">{state.location}
                <i className="fa fa-map-marker"/>
            </a>
        </p>
        <p className='price'>Starts from <span className='priceValue'>₹{state.price}</span></p>
        <ImageList cols={3} style={{ width: '100%', margin: 0 }}>
            {state.images.split('^^').map((item) => (
                <ImageListItem key={item}>
                <img
                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={state.name}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
        </ImageList>
        <br />
        {state.amenities.split('^^').map((amenity) => {
            return <Chip style={{ margin: '10px 5px 10px 0' }} label={amenity} variant="outlined" />
        })}
    </section>
    </>
}

export default Homestay;


