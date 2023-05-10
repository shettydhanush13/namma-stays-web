import * as React from 'react';
import './styles.scss'
import DataTable from '../../Components/DataTable'
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
    <section style={{ padding: '0 15%' }}>
        <Filters/>
        <DataTable jsonData={jsonData}/>
    </section>
    </>
}

export default Home;


