import React, { Component } from 'react'
import './App.css';



import fetch from 'superagent';


export default class App extends Component {


  state = {

    data: [],

  }

  componentDidMount = async () => {
    await this.fetchFood();
  }




  fetchFood = async () => {
    let response = await fetch.get(`https://salty-earth-02045.herokuapp.com/food`);

    this.setState({
      data: response.body


    });

  }


  render() {
    return (

      <div className='food'>
        <p>My crappy React app</p>
        {
          this.state.data.map(food =>

            <div className='food' key={food.id}>
              <p> name: {food.name}</p>
              <p> type: {food.type}</p>

              <p> Flavor level: {food.flavor}</p>

            </div>



          )
        }


      </div>
    )
  }
}

