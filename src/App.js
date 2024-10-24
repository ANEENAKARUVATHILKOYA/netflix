
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar'

function App() {
  return (
    <div  className="App">

      <Navbar/>
      <Banner/>

        <Row   isPoster={true} title="Trending"   fetchurl={requests.fetchTrending}/> 
        <Row  title="Orginals"   fetchurl={requests.fetchNetflixOrginals}/> 
        <Row  title="Top Rated"  fetchurl={requests.fetchTopRated} />
        <Row  title="Action"     fetchurl={requests.fetchActionMovies}/>
        <Row  title="Comedy"   fetchurl={requests.fetchComedyMovies}/>
        <Row  title="Horror"   fetchurl={requests.fetchHorrorMovies}/>
        <Row  title="Romance"   fetchurl={requests.fetchRomanceMovies}/>
        <Row  title="Documentaries"   fetchurl={requests.fetchDocumentaries}/>
      

    </div>
  );
}

export default App;
