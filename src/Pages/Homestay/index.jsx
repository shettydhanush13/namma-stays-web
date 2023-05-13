import './styles.scss'
import Header from '../../Components/Header'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Chip from '@mui/material/Chip';
import { useLocation } from "react-router-dom";

const Homestay = () => {
    const { state: 
        { name, mapLink, region, price, images, amenities,
            contact: { email, phone, website }
        }
    } = useLocation();
    return <>
    <Header/>
    <section className='homestayDescription'>
        <h1>{name}</h1>
        <div className='contacts'>
            {email && <p><i className="fa fa-envelope"/>{email}</p>}
            {phone && <p><i className="fa fa-phone"/>{phone}</p>}
            {website && <p><i className="fa fa-globe"/>{website}</p>}
        </div>
        <p className='type'>
            <a href={mapLink} target="_blank" rel="noreferrer"><i className="fa fa-map-marker"/>{region}</a>
            <p className='card-price'>{price}</p>
        </p>
        <p className='price'><span className='priceValue'>{price}</span></p>
        <div className='image-tag-container'>
            <ImageList cols={window.orientation > 1 ? 1 : 3} className="imageList">
                {images.map((item) => (
                    <ImageListItem key={item}>
                    <img
                        src={`${item}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={name}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
            <br />
            <div>{amenities.map((amenity) => {
                return <Chip className='chip' label={amenity} />
            })}</div>
        </div>
    </section>
    </>
}

export default Homestay;


