import React, { Component } from 'react';

class Cart extends Component {
    render() {
        const { orders, items } = this.props;
        return (
            <React.Fragment>

                <ul className="my-items">
                    {orders.map(order =>
                        <li key={order.sid}>
                            <div className="my-item-img">
                                <img src={items.imgUrl} alt="" />
                            </div>
                            <div className="my-item-details">
                                <p className="item-name">{items.name}</p>
                                <p>
                                    <span className="item-quantity">{order.count}</span> x
                            <b className="item-amount"> ${items.price}</b>
                                </p>
                                <p>Size <span className="item-size">{order.size}</span></p>
                            </div>
                        </li>
                    )}
                </ul>


            </React.Fragment>
        );
    }
}

export default Cart;