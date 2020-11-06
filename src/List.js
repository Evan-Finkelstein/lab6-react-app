import React, { Component } from 'react'
import './App.css';
import { Link } from 'react-router-dom';




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
        <Link to="/Create">create</Link>
        {
          this.state.data.map(food =>
            <div key={food.id}>
              <Link to={`/detail/${food.id} `}>
                <div className='food' >
                  <p> name: {food.name}</p>
                  <p> type: {food.type}</p>

                  <p> Flavor level: {food.flavor}</p>

                </div>
              </Link>
            </div>


          )
        }


      </div>
    )
  }
}

