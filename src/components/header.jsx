import React, { Component } from 'react';
import Cart from './cart';

class Header extends Component {



    render() {
        const { orders, items } = this.props;
        return (

            <div className="my-cart">
                <div className="my-cart-content">
                    <div className="btn-my-cart">
                        <span className="my-cart-text">
                            <span className="my-cart-title">My Cart</span>
                            <i className="my-cart-icon fa fa-shopping-cart"></i>
                            <span className="prod-count"> {this.getOrderCount(orders)} </span>
                        </span>
                        <Cart orders={orders} items={items} />
                    </div>
                </div>
            </div>
        );
    }
    getOrderCount = (orders) => {
        let orderCount = 0;
        orders.forEach(order => {
            orderCount += order.count
        })
        return orderCount;
    }
}

export default Header;