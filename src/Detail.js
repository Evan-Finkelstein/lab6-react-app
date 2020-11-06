import React, { Component } from 'react'
// import request from 'superagent';
import {
    updateFood,
    deleteFood,
    fetchFood,
    fetchTypes
} from './Fetches.js';

const user = {
    userId: 1
};

export default class CreatePage extends Component {
    state = {
        types: [],
        food: [],
        flavor: 0,
        is_good: '',
        typeId: 1,
        name: ''
    }

    componentDidMount = async () => {
        const types = await fetchTypes();
        const food = await fetchFood(this.props.match.params.id);
        const matchingBrand = types.find((type) => {
            return type.type === food.type
        });


        this.setState({
            food: food,
            types: types,
            name: food.name,
            is_good: food.is_good,
            flavor: food.flavor,
            typeId: matchingBrand.id

        }); console.log(matchingBrand.id)
    }


    handleSubmit = async (e) => {
        e.preventDefault();
        const newFood = {

            name: this.state.name,

            flavor: this.state.flavor,
            is_good: this.state.is_good,
            type_id: this.state.typeId,
            owner_id: user.userId
        }

        await updateFood(this.props.match.params.id, newFood
        )

        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ typeId: e.target.value });
    }

    handleDelete = async (e) => {
        await deleteFood(this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                update a food
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input value={this.state.name} onChange={e => this.setState({ name: e.target.value })} type="text" />
                    </label>
                    <label>
                        Flavor
                        <input value={this.state.flavor} onChange={e => this.setState({ flavor: e.target.value })} type="number" />
                    </label>
                    <label>
                        Is it good?
                        <select value={this.state.is_good} onChange={e => this.setState({ is_good: e.target.value })}>
                            <option value='true' > yes </option>
                            <option value='false' > no </option>
                        </select>
                    </label>

                    <label>
                        Type
                        <select value={this.state.typeId} onChange={this.handleChange}>

                            {
                                this.state.types.map(type =>
                                    <option key={type.type} value={type.id}>
                                        {type.type}
                                    </option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>

                </form>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}
