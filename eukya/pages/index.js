import Head from 'next/head'
import Router from 'next/router'

const showcaseImages = ['/showcase1.png', '/showcase2.png', '/showcase3.png']

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredItem: null,
      imageCycle: 0,
      nextImageNum: 1,
      prevImageNum: 2
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

  render() {
    const { hoveredItem, imageCycle, nextImageCycle } = this.state

    return (
      <React.Fragment>
        <Head>
          <title>Eukya Furniture</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'/>
          <script src="https://kit.fontawesome.com/ca7ff47d1e.js" crossOrigin="anonymous"/>
        </Head>
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
              <a>Restaurant</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'restaurant' ? 'selected' : ''}`} src="/restaurant.jpg"/>
              </div>
            </div>
            <div className="category" 
              onClick={() => this.onCategoryClick('hotel')}
              onMouseEnter={() => this.onCategoryHover('hotel')}
              onMouseLeave={() => this.onCategoryHover(null)}
            >
              <a>Hotel</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'hotel' ? 'selected' : ''}`} src="/hotel.jpg"/>
              </div>
            </div>
            <div className="category" 
              onClick={() => this.onCategoryClick('banquet')}
              onMouseEnter={() => this.onCategoryHover('banquet')}
              onMouseLeave={() => this.onCategoryHover(null)}
            >
              <a>Banquet</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'banquet' ? 'selected' : ''}`} src="/banquet.jpg"/>
              </div>
            </div>
          </div>
          <div className="showcase-container">
            <a>Showcase</a>
            <div className="showcase">
              <div className="showcase-image-container">
                <div className="carousel">
                  <img src={showcaseImages[0]} className="current"/>
                  <img src={showcaseImages[1]} className="next"/>
                  <img src={showcaseImages[2]} className="previous"/>
                </div>
                <div className="image-cycle-container">
                  <a/>
                  <a/>
                  <a/>
                </div>
              </div>
              
              <div className="showcase-description-container">
                <div className="showcase-description">
                  Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! 
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