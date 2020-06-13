import Router from 'next/router'
import { Phone, TabletLand } from '../constants/screenWidth'
import { showcaseItems } from '../constants/showcase'
import Header from './header'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredItem: null,
      displayModal: false,
      currentItem: '',
      showcaseItems: []
    }
  }

  onCategoryHover = category => {
    this.setState({
      hoveredItem: category
    })
  }

  onCategoryClick = category => {
    Router.push({
      pathname: '/search',
      query: { category: category }
    })
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

  closeModal = () => {
    this.setState({
      displayModal: false
    })
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.updateShowcaseRow)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateShowcaseRow)
  }

  componentDidMount() {
    this.updateShowcaseRow()
  }

  updateShowcaseRow = () => {
    let showcasePerRow = 3
    let tempColumnItems = []
    let tempArray = []

    if (window.innerWidth < TabletLand) {
      showcasePerRow = 2
    } else {
      showcasePerRow = 3
    }

    showcaseItems.forEach((item, index) => {
      let row = Math.floor(index/showcasePerRow)
      tempArray.push(item)
      if (tempArray.length === showcasePerRow) {
        tempColumnItems.push(tempArray)
        tempArray = []
      }
    })

    if(tempArray.length !== 0) {
      tempColumnItems.push(tempArray)
    }

    this.setState({
      showcaseItems: tempColumnItems
    })
  }

  render() {
    const { currentItem, displayModal, hoveredItem, showcaseItems } = this.state

    return(
      <React.Fragment>
        <div className={`modal-escape ${displayModal ? '' : 'hidden'}`} onClick={this.toggleModal} />     
        <div className={`modal-wrapper ${displayModal ? '' : 'hidden'}`}>
          <div className="modal-container">
            <div className="modal-description">
              <h1>{currentItem}</h1>
            </div>
          </div>
        </div>
        <div className="main-container">
          <Header closeModal={this.closeModal}/>
          <div className="catalogue-container">
            <div className="category" 
              onClick={() => this.onCategoryClick('Restaurant')}
              onMouseEnter={() => this.onCategoryHover('Restaurant')}
              onMouseLeave={() => this.onCategoryHover(null)}
              >
              <a>Chairs & Barstools</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'Restaurant' ? 'selected' : ''}`} src="/restaurant.jpg"/>
              </div>
            </div>
            <div className="category" 
              onClick={() => this.onCategoryClick('Hotel')}
              onMouseEnter={() => this.onCategoryHover('Hotel')}
              onMouseLeave={() => this.onCategoryHover(null)}
            >
              <a>Tables & Bases</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'Hotel' ? 'selected' : ''}`} src="/hotel.jpg"/>
              </div>
            </div>
            <div className="category" 
              onClick={() => this.onCategoryClick('Banquet')}
              onMouseEnter={() => this.onCategoryHover('Banquet')}
              onMouseLeave={() => this.onCategoryHover(null)}
            >
              <a>Booths</a>
              <div className="zoom-container">
                <img className={`${hoveredItem === 'Banquet' ? 'selected' : ''}`} src="/banquet.jpg"/>
              </div>
            </div>
          </div>
          <div className="showcase-container">
            <a>Showcase</a>
            <div className="showcase">
              {
                showcaseItems.map((row, cIndex) => {
                  return(
                    <div key={`row-${cIndex}`} className="showcase-image-row">
                      {
                        row.map((item, index) => {
                          return(
                            <div key={`row-${cIndex} item-${index}`} className="showcase-image-container" onClick={() => this.toggleModal(item.name)}>
                              <img src={item.logo}/>
                            </div>
                          )
                        })
                      }
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage