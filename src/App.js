import Home from './Pages/Home';

function App() {
  return (

    <div style={{ padding: 0 }}>
      <header style={{
        height: 70,
        marginBottom: 20,
        backgroundColor: 'rgb(25, 118, 210)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 25px',
        color: '#fff'
      }}>
        <h3>Namma Stays</h3>
      </header>
      <Home/>
    </div>
  );
}

export default App;
