import Head from 'next/head'
import Router from 'next/router'

class Home extends React.Component {
  state = {
    hoveredItem: null
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
    const { hoveredItem } = this.state

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
              <img src="/showcase1.png"/>
              <div className="showcase-description-container">
                <div className="showcase-description">
                  Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! Well this product is great isn't it! 
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