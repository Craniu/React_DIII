import Header from "./Header";
import CardPizza from "./CardPizza";
import {pizzas} from "../pizzas"

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        
        
          {pizzas.map((pizzas) => (
            <CardPizza 
            key={pizzas.id}
            desc={pizzas.desc}
            id={pizzas.id}
            img={pizzas.img}
            ingredients={pizzas.ingredients}
            name={pizzas.name}
            price={pizzas.price}
            />))}


      </div>
    </div>
  );
};

export default Home;
