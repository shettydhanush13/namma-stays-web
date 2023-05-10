import './styles.scss'
import DataTable from '../../Components/DataTable'
import Filters from '../../Components/Filters'
const Home = () => {
    return <section style={{ padding: '0 15%' }}>
        <Filters/>
        <DataTable/>
     </section>
}

export default Home;