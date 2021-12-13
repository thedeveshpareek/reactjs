// import logo from './logo.svg';
import './App.css';
import Data from "./component/Data";
import Navbar from './component/Navbar';
import { Sec } from './component/Sec';
import Card from './component/Card';
function App() {
  const cards = Data.map(item => {
    return (
        <Card 
        k    key={item.id}
            img={item.coverImg}
            title={item.title}
            rating={item.stats.rating}
            review={item.stats.review}
            location={item.location}
            price={item.price}
            openSpots={item.openSpots}
        />
    )
})        
  return (
    <div className="App">
      <Navbar/>
      <Sec/>
      <section className="card-list">
      {cards}
      </section>
    </div>
  );
}

export default App;
