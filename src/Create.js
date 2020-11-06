import React, { Component } from 'react'
import request from 'superagent';

const user = {
    userId: 1
};

export default class CreatePage extends Component {
    state = {
        types: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://salty-earth-02045.herokuapp.com/type');

        this.setState({ types: response.body });
    }


    handleSubmit = async (e) => {
        e.preventDefault();

        const newFood = {

            name: this.state.name,

            flavor: this.state.flavor,
            is_good: this.state.is_good,
            type_id: this.state.typeId,
            owner_id: user.userId
        };
        console.log(newFood)

        await request
            .post('https://salty-earth-02045.herokuapp.com/food/')
            .send(newFood);


        this.props.history.push('/');
    }

    handleChange = (e) => {
        this.setState({ typeId: e.target.value });
    }

    render() {
        return (
            <div>
                create a food
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input onChange={e => this.setState({ name: e.target.value })} type="text" />
                    </label>
                    <label>
                        Flavor
                        <input onChange={e => this.setState({ flavor: e.target.value })} type="number" />
                    </label>
                    <label>
                        Is it good?
                        <select onChange={e => this.setState({ is_good: e.target.value })}>
                            <option value="true" > yes </option>
                            <option value="false" > no </option>
                        </select>
                    </label>

                    <label>
                        Type
                        <select onChange={this.handleChange}>
                            <option>select type</option>
                            {
                                this.state.types.map(type => <option key={type.id} value={type.id}>
                                    {type.type}
                                </option>)
                            }
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
