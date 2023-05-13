import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Chip from '@mui/material/Chip';
import './styles.scss';
import { useNavigate } from "react-router-dom";

export default function DataCard({ jsonData }) {
   const navigate = useNavigate();
  return (
    <>
        {jsonData.map((row) => (
            <div className='dataCard' onClick={() => navigate(`/homestay/${row.name}`, { state: row })}>
                <div className='cardInfo'>
                    <div>
                        <h2 style={{ margin: '0' }}>{row.name}</h2>
                        <h5 style={{ marginTop: 10 }}>{row.accomodationType.toUpperCase()}</h5>
                        <div className='location-price-section'>
                            <h4 className='location-section'><i className="fa fa-map-marker"/>&nbsp;{row.region}</h4>
                            <h4 className='card-price'>{row.price}</h4>
                        </div>
                    </div>
                    <div>
                        {row.amenities.map((amenity) => {
                            return <Chip style={{ margin: '10px 5px 0 0' }} label={amenity}/>
                        })}
                    </div>
                </div>
                <ImageList className='cardImage' cols={2}>
                    {row.images.slice(0, 4).map((item) => (
                        <ImageListItem key={item}>
                        <img
                            src={`${item}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item}
                            loading="lazy"
                        />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        ))}
    </>
  );
}