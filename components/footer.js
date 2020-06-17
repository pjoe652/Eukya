import Link from 'next/link'
import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="footer">
          <div className="title-container">
            <Link href= "/">
              <div className="title-clickable">
                <a className="title">
                  EUKYA
                </a>
                <a className="subcase">
                  furniture
                </a>
              </div>
            </Link>
          </div>
          <div className="copyright">
            Copyright © Eukya Furniture Ltd All rights reserved.
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer