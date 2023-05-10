import './styles.scss'
import Header from '../../Components/Header'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useLocation } from "react-router-dom";

const Homestay = () => {
    const { state } = useLocation();
    console.log({ state });
    return <>
    <Header/>
    <section style={{ padding: '0 15%' }}>
    <h1>{state.name}</h1>
    <p>{state.accomodationType}</p>
    <p>{state.location}</p>
    <div>
    <p>{state.email}</p>
    <p>{state.phone}</p>
    <p>{state.website}</p>
    </div>
    <ImageList cols={4} style={{ width: '100%', margin: 0 }}>
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
    </section>
    </>
}

export default Homestay;


