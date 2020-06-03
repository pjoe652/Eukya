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
        <header>
          <div className="title-container">
            <a className="title">
              EUKYA
            </a>
            <a className="subcase">
              furniture
            </a>
          </div>
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
        </header>
  
      </React.Fragment>
    )
  }
}

export default Home