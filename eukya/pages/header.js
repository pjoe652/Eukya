import Link from 'next/link'

class Header extends React.Component {
  state = {
    displayModal: false
  }

  onDropdownClick() {
    if (this.state.displayModal) {
      this.setState({
        displayModal: false
      })
    } else {
      this.setState({
        displayModal: true
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <div className="dropdown-button" onClick={this.onDropdownClick}>
            <i className="fas fa-caret-down"/>
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
        <div className="dropdown-bar">
          Hello
        </div>
      </React.Fragment>
    )
  }
}

export default Header