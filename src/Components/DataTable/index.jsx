import * as React from 'react';
import { csvFileToJSON } from '../../ulits';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Chip from '@mui/material/Chip';
import './styles.scss';

export default function DataTable() {
  const [jsonData, setJsonData] = React.useState([]);
  React.useEffect(() => {
    fetch( './data.csv' )
    .then( response => response.text() )
    .then( responseText => {
        setJsonData(csvFileToJSON(responseText));
    })
  }, []);

  return (
    <>
        {jsonData.map((row) => (
            <div className='card'>
                <div style={{ width: '30%' }}>
                    <h2>{row.name}</h2>
                    <h3>{row.accomodationType}</h3>
                    <h4>{row.location}</h4>
                    <h4>Strating from ₹{row.price}</h4>
                </div>
                <div style={{ width: '45%', padding: '20px 0' }}>
                    {row.amenities.split("-").map((amenity) => {
                        return <Chip style={{ margin: '0 5px 10px 0' }} label={amenity} variant="outlined" />
                    })}
                </div>
                <ImageList cols={2} rowHeight={164} style={{ width: '25%' }}>
                    {[row.images,row.images].map((item) => (
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