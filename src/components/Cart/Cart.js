//created cart.json file in order to make cart.js my main folder for the cart folder
//doing this allows you to avoid creating multiple index.js files and proper relative paths down to the file
import React, { Component } from 'react';
import Title from '../Title';


export class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
            </section>

        )
    }
}

export default Cart
