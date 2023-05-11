import * as React from 'react';
import './styles.scss'
import DataCard from '../../Components/DataCard'
import Filters from '../../Components/Filters'
import Header from '../../Components/Header'
import { csvFileToJSON } from '../../ulits'

const Home = () => {
    const [jsonData, setJsonData] = React.useState([]);
    React.useEffect(() => {
        fetch( './data.csv' )
        .then( response => response.text() )
        .then( responseText => {
            setJsonData(csvFileToJSON(responseText));
        })
    }, []);
    return <>
    <Header/>
    <section className='layout'>
        <Filters/>
        <DataCard jsonData={jsonData}/>
    </section>
    </>
}

export default Home;


