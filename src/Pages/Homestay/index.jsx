import './styles.scss'
import Header from '../../Components/Header'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Chip from '@mui/material/Chip';
import { useLocation } from "react-router-dom";

const Homestay = () => {
    console.log({ window: window.orientation });
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
            <a href={state.map} target="_blank" rel="noreferrer"><i className="fa fa-map-marker"/>{state.location}</a>
            <p className='card-price'>Starts from <span>₹ {state.price}</span></p>
        </p>
        <p className='price'>Starts from <span className='priceValue'>₹ {state.price}</span></p>
        <div className='image-tag-container'>
            <ImageList cols={window.orientation > 1 ? 1 : 3} className="imageList">
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
            <div>
                {state.amenities.split('^^').map((amenity) => {
                    return <Chip className='chip' label={amenity} />
                })}
            </div>
        </div>
    </section>
    </>
}

export default Homestay;


