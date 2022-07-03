import React from 'react'
import classes from './Item.module.css'
import { countBy } from 'lodash';

const Item = ({flavour,add,remove,scoops=0}) => {
    const countQuantity = countBy(scoops)
    return (
        <li className={classes.item}>
            <span>{flavour}</span>
            <span className={classes.quantity}>{countQuantity[flavour]}</span>
            <div className="right">
                <button type="button" onClick={()=> add(flavour)} className={[classes.plus,'rounded'].join(' ')}>+</button>
                <button type="button" onClick={()=>remove(flavour)} className={[classes.minus,'rounded'].join(' ')}>-</button>
            </div>
        </li>
    )
}

export default Item