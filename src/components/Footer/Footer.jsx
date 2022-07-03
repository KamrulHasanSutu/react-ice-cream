import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <footer>
        <div className={['container',classes.container].join(' ')}>
          <div>
            Copyright &copy;2020.
          </div>
          <div className="textRight">
            Built with <span className="red">&hearts;</span> by
            <a
              href="https://reactjs.org/docs/create-a-new-react-app.html"
              target="_blank"
              >Create React App</a
            >
          </div>
        </div>
      </footer>
  )
}

export default Footer