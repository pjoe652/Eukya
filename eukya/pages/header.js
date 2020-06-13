import Link from 'next/link'
import React from 'react'

class Header extends React.Component {
  state = {
    displayMobileMenu: false
  }

  onDropdownClick = () => {
    const { displayMobileMenu } = this.state
    const { closeModal = null } = this.props

    if (displayMobileMenu) {
      this.setState({
        displayMobileMenu: false,
        displayModal: false,
      }, () => {
        this.closeMobileMenu()
        if (closeModal !== null) {
          closeModal()
        }
      })
    } else {
      this.setState({
        displayMobileMenu: true,
        displayModal: false,
      }, () => {
        this.openMobileMenu()
        if (closeModal !== null) {
          closeModal()
        }
      })
    }
  }

  openMobileMenu = () => {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.overflowY = "hidden"
  }

  closeMobileMenu = () => {
    const scrollY = document.body.style.top;
    document.body.style.top = '';
    document.body.style.overflowY = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    this.setState({
      displayMobileMenu: false
    })
  }

  render() {
    const { displayMobileMenu } = this.state

    return (
      <React.Fragment>
        <header>
          <div className="dropdown-button">
            <i className={`fas fa-caret-down ${displayMobileMenu ? 'flip' : ''}`} onClick={this.onDropdownClick}/>
          </div>
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
          <div className="button-containers">
            <Link href= "/about">
              <a className="button">
                About Us
              </a>
            </Link>
            <Link href= "/contact">
              <a className="button">
                Contact Us
              </a>
            </Link>
          </div>
        </header>
        <div className={`dropdown-bar ${displayMobileMenu ? 'open' : ''}`}>
          <div className="dropdown-options">
            <div className="link-container"> 
              <Link href= "/about">
                <a>
                  About Us
                </a>
              </Link>
            </div>
            <div className="link-container"> 
              <Link href= "/contact">
                <a>
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header