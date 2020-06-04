import Head from 'next/head'
import Router from 'next/router'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredItem: null,
      displayModal: false,
      currentItem: ''
    }
  }

  onCategoryHover = category => {
    this.setState({
      hoveredItem: category
    })
  }

  onCategoryClick = category => {
    Router.push(`/${category}`)
  }

  toggleModal = item => {
    if (this.state.displayModal) {
      this.setState({
        displayModal: false,
      })
    } else {
      this.setState({
        displayModal: true,
        currentItem: item
      })
    }
  }

  render() {
    const { currentItem, displayModal, hoveredItem } = this.state

    return (
      <React.Fragment>
        <Head>
          <title>Eukya Furniture</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'/>
          <script src="https://kit.fontawesome.com/ca7ff47d1e.js" crossOrigin="anonymous"/>
        </Head>
        <div className={`modal-escape ${displayModal ? '' : 'hidden'}`} onClick={this.toggleModal} />     
        <div className={`modal-wrapper ${displayModal ? '' : 'hidden'}`}>
          <div className="modal-container">
            <div className="modal-description">
              <h1>{currentItem}</h1>
            </div>
            {/* <img src={currentItem.src}/> */}
          </div>
        </div>
        <div className="main-container">
          <header>
            <div className="title-container">
              <a className="title">
                EUKYA
              </a>
              <a className="subcase">
                furniture
              </a>
            </div>
          </header>
          <div className="catalogue-container">
            <div className="category" 
              onClick={() => this.onCategoryClick('restaurant')}
              onMouseEnter={() => this.onCategoryHover('restaurant')}
              onMouseLeave={() => this.onCategoryHover(null)}
              >
              <a>Chairs & Barstools</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'restaurant' ? 'selected' : ''}`} src="/restaurant.jpg"/>
              </div>
            </div>
            <div className="category" 
              onClick={() => this.onCategoryClick('hotel')}
              onMouseEnter={() => this.onCategoryHover('hotel')}
              onMouseLeave={() => this.onCategoryHover(null)}
            >
              <a>Tables & Bases</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'hotel' ? 'selected' : ''}`} src="/hotel.jpg"/>
              </div>
            </div>
            <div className="category" 
              onClick={() => this.onCategoryClick('banquet')}
              onMouseEnter={() => this.onCategoryHover('banquet')}
              onMouseLeave={() => this.onCategoryHover(null)}
            >
              <a>Booths</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'banquet' ? 'selected' : ''}`} src="/banquet.jpg"/>
              </div>
            </div>
          </div>
          <div className="showcase-container">
            <a>Showcase</a>
            <div className="showcase">
              <div className="showcase-image-row">
                <div className="showcase-image-container" onClick={() => this.toggleModal("applebees")}>
                  <img src="/applebees.png"/>
                </div>
                <div className="showcase-image-container" onClick={() => this.toggleModal("carlsjr")}>
                  <img src="/carlsjr.png"/>
                </div>
                <div className="showcase-image-container" onClick={() => this.toggleModal("dennys")}>
                  <img src="/dennys.png"/>
                </div>
              </div>
              <div className="showcase-image-row">
                <div className="showcase-image-container" onClick={() => this.toggleModal("jackinthebox")}>
                  <img src="/jackinthebox.png"/>
                </div>
                <div className="showcase-image-container" onClick={() => this.toggleModal("starbucks")}>
                  <img src="/starbucks.png"/>
                </div>
                <div className="showcase-image-container" onClick={() => this.toggleModal("showcase")}>
                  <img src="/applebees.png"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home