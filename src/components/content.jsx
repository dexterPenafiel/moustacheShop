import React, { Component } from 'react';
import Header from './header';

class Content extends Component {
    state = {
        items:
        {
            id: 1,
            name: 'Classic Tee',
            price: 75.00,
            description: 'Dolor sit amet, consectetur adipiscing elit_ Haec et tu ita posuisti, et verba vestra sunt Quod autem ratione actum est. id officium appellamus dolor sit amet. consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est. id officium appellamus',
            imgUrl: './img/classic-tee.jpg',
            sizes: [
                {
                    sid: 's1',
                    size: 'S',
                    sName: 'Small'
                },
                {
                    sid: 's2',
                    size: 'M',
                    sName: 'Medium'
                },
                {
                    sid: 's3',
                    size: 'L',
                    sName: ':Large'
                }
            ]
        },

        selectedSize: {},
        orders: [
            // {
            //     sid: 's1',
            //     size: 'S',
            //     sName: 'Small',
            //     count: 1
            // }
        ]
    }
    handleSize = (size) => {
        let selectedSize = this.state.selectedSize;
        selectedSize = size;
        this.setState({ selectedSize })
    }

    handleOrder = () => {
        const orders = this.state.orders;
        const selectedSize = this.state.selectedSize;
        let index;

        if (orders.indexOf(selectedSize) === -1) {
            selectedSize.count = 1;
            orders.push(selectedSize);
        } else {
            index = orders.indexOf(selectedSize);
            orders[index].count++;
        }

        this.setState({ orders })
    }

    render() {
        const item = this.state.items;
        return (
            <React.Fragment>
                <Header orders={this.state.orders} items={this.state.items} />

                <div className="row">
                    <div className="col-lg-4">
                        <div className="section-img">
                            <img src={item.imgUrl} alt={item.name} className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="section-details">
                            <h2 className="prod-name">{item.name}</h2>
                            <div className="prod-amount">${item.price}</div>
                            <div className="prod-info">
                                <p>{item.description}</p>
                            </div>

                            <div className="prod-sizes">
                                <blockquote>
                                    <span className="req-star">Size </span>
                                    <span className="selected-size">{this.state.selectedSize.size}</span>
                                </blockquote>
                                <ul>
                                    {item.sizes.map(size =>
                                        <li key={size.sid} data-id={size.sid} onClick={() => this.handleSize(size)}>{size.size}</li>
                                    )}
                                </ul>
                            </div>


                            <button className="btn btn-dark btn-add-cart" id="btnAddCart" onClick={() => this.handleOrder()}>Add to Cart</button>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Content;