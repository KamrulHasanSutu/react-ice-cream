import React, { Component } from 'react'
import classes from './IceCreamBuilder.module.css'
import IceCream from '../../components/IceCream/IceCream'
import Builder from '../../components/Builder/Builder'

export default class IceCreamBuilder extends Component {

    state = {
        items: {
            vanilla: 45,
            chocolate: 50,
            lemon: 35,
            orange: 40,
            straberry: 60
        },
        scoops: [],
        totalPrice: 0
    }

    addSchoop = (scoop) => {
        const { scoops, items} = this.state;
        const workingScoops = [...scoops]

        workingScoops.push(scoop)
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop]
            }

        })
    }
    removeSchoop = (scoop) => {
        const { scoops, items, totalPrice } = this.state;
        const workingScoops = [...scoops]

        const findIndex = workingScoops.findIndex(sc => sc === scoop);
        workingScoops.splice(findIndex, 1)
        this.setState({
            scoops: workingScoops,
            totalPrice: totalPrice - items[scoop]
        })
    }
    render() {
        const { items, scoops, totalPrice } = this.state
        return (
            <div class={['container', classes.container].join(' ')} id="iceCreamBuilder">
                <IceCream scoops={scoops} />

                <Builder 
                   items={items} 
                   addSchoop={this.addSchoop} 
                   removeSchoop={this.removeSchoop} 
                   totalPrice={totalPrice} 
                   scoops={scoops}/
                   >
            </div>
        )
    }
}
