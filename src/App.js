import './styles/App.css';


import Header from './components/header'
import Dishes from './components/dishes'
import NewDish from './components/newDish'
import { Component } from 'react';
import data from './assets/Data/dishes.json'
import ColourState from './components/colourState'
import Sentences from './components/sentences'
import { ExercisesGiriga } from './components/exercisesGirija';

// function App() {
class App extends Component {
  state = {
    dish: "Pizza",
    dishes: data
  }

  showDishes = e => {
    e.preventDefault();
    this.props.history.push("/platillos");
  }

  onUpdateDish = (index, updatedName) => {
    let newState = {...this.state};
    newState.dishes[index].name = updatedName;

    this.setState(newState);
  }
  addDish = (dishName) => {
    let newState = {...this.state};

    const newDish = {
      id: newState.dishes.length,
      name: dishName,
      country: "Mexico",
      ingredients: ['Semillas', 'Pollo','Arroz']
    }

    newState.dishes.push(newDish);
    this.setState(newState);
  }
  render() {
    return (
      <div className="App">
        <Header></Header>
        <NewDish onAddDish={this.addDish}></NewDish>
        {/* <Dish name="Pizza"></Dish> */}
        {/* <Button variant="contained" color="secondary" onClick={this.showDishes}>Elegir</Button> */}
       <Dishes data={this.state.dishes} onUpdateDish={this.onUpdateDish}></Dishes>
       <ColourState></ColourState>
       <br></br>
       <Sentences></Sentences>
       <br></br>
       <ExercisesGiriga></ExercisesGiriga>
      </div>
    );
  }
}

export default App;
