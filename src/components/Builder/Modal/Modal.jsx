import React from 'react'
import classes from '/.Modal.module.css'

const Modal = () => {
  return (
    <div className="react" id="modal">
    <div className={classes.backdrop} onclick="removeModal()"></div>
    <div className={classes.modalBody}>
      <div className="formContainer react" id="orderForm">
        <h1>Complete the form below and hit submit</h1>
        <form className="orderForm">
          <ul>
            <li>
              <input
                type="text"
                name="name"
                className="fieldStyle fieldSplit alignLeft"
                placeholder="Name"
              />
              <input
                type="text"
                name="phone"
                className="fieldStyle fieldSplit alignRight"
                placeholder="Phone no."
              />
            </li>
            <li>
              <input
                type="text"
                name="email"
                className="fieldStyle fieldFull"
                placeholder="Email"
              />
            </li>
            <li>
              <textarea
                name="address"
                className="fieldStyle"
                placeholder="Address"
              ></textarea>
            </li>
            <li>
              <input type="submit" value="Submit Order" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Modal