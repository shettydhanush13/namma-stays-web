import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Chip from '@mui/material/Chip';
import './styles.scss';
import { useNavigate } from "react-router-dom";

export default function DataTable({ jsonData }) {
   const navigate = useNavigate();
  return (
    <>
        {jsonData.map((row) => (
            <div className='card' onClick={() => navigate(`/homestay/${row.name}`, { state: row })}>
                <div style={{ width: '75%' }}>
                    <div>
                        <h2 style={{ marginTop: 0 }}>{row.name}</h2>
                        <h3>{row.accomodationType}</h3>
                        <h4>{row.location}</h4>
                        <h4>Strating from ₹{row.price}</h4>
                    </div>
                    <div>
                        {row.amenities.split('^^').map((amenity) => {
                            return <Chip style={{ margin: '10px 5px 0 0' }} label={amenity} variant="outlined" />
                        })}
                    </div>
                </div>
                <ImageList cols={2} style={{ width: '25%', margin: 0 }}>
                    {row.images.split('^^').slice(0, 4).map((item) => (
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