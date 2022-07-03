import React from 'react'
import Items from './Items/Items'
import TotalPrice from './TotalPrice/TotalPrice'
import classes from './Builder.module.css'

const Builder = ({items,addSchoop,totalPrice,removeSchoop,scoops}) => {
    return (
        <div className={classes.builder}>
            <h3>Build your own Ice Cream Sundae</h3>
            <Items items={items} add={addSchoop} remove={removeSchoop} scoops={scoops}/>
            <TotalPrice price={totalPrice}/>

            <button type="button" onclick="next()" className={[classes.order, 'rounded'].join(' ')}>
                Add to Cart
            </button>
        </div>
    )
}

export default Builder