import React from 'react'

function Atom() {
    return (
    <div id="atom-main">
      <span className="container leftRapper">
        <span className="wrap">
          <span className="circle horizontal c1">
            <span className="wrap-electron">
              <span className="circle electron"></span>
            </span>
          </span>
          <span className="circle vertical c1">
            <span className="wrap-electron">
              <span className="circle electron"></span>
            </span>
          </span>
          <span className="circle electron"></span>
        </span>
        <span className="wrap r">
          <span className="circle horizontal c2">
            <span className="wrap-electron">
              <span className="circle electron"></span>
            </span>
          </span>
          <span className="circle vertical c2">
            <span className="wrap-electron">
              <span className="circle electron"></span>
            </span>
          </span>
          <span className="circle electron"></span>
        </span>
      </span>
    </div>
    )
}

export default Atom
