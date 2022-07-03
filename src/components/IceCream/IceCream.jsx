import React from 'react'
import classes from './IceCream.module.css'
import Scoop from './Scoop/Scoop'
const IceCream = ({ scoops }) => {
  // const flavours = Object.keys(scoops)
  return (
    <div className={classes.icecream} id="icecream">
      <p className={classes.cone}></p>
      {scoops.map((flavour) => (
        <Scoop key={`${flavour}${Math.random()}`} scoop={flavour} />
      ))}
      <div className={classes.cherry}></div>
    </div>
  )
}

export default IceCream 