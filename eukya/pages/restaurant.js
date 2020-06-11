import Header from "./header"
import { chairsAndBarstools } from '../constants/chairsAndBarstools'
import { Desktop, Phone, DesktopLg, Tablet, TabletLand } from '../constants/screenWidth'

class Restaurant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: []
    }
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
    let itemsPerRow = 4
    let tempColumnItems = []
    let tempArray = []

    console.log(window.innerWidth)

    if (window.innerWidth < Tablet) {
      itemsPerRow = 1
    } else if (window.innerWidth < TabletLand) {
      itemsPerRow = 2
    } else if (window.innerWidth < DesktopLg) {
      itemsPerRow = 3
    }

    chairsAndBarstools.forEach((item, index) => {
      let row = Math.floor(index/itemsPerRow)
      item.empty = false
      tempArray.push(item)
      if (tempArray.length === itemsPerRow) {
        tempColumnItems.push(tempArray)
        tempArray = []
      }
    })

    while (tempArray.length < itemsPerRow) {
      tempArray.push({empty: true})
    }

    tempColumnItems.push(tempArray)

    this.setState({
      items: tempColumnItems
    })
  }

  render() {
    const { items } = this.state
    console.log(items)

    return(
      <React.Fragment>
        <div className="main-container">
          <Header/>
          <div className="item-wrapper">
            <div className="category-sidebar">
              <div className="sidebar-item">
                Item 1
              </div>
              <div className="sidebar-item">
                Item 2
              </div>
              <div className="sidebar-item">
                Item 3
              </div>
            </div>
            <div className="item-container">
              <div className="title">
                Chairs and Barstools
              </div>
              {
                items.map((row, cIndex) => {
                  return(
                    <div key={`row-${cIndex}`} className="item-image-row">
                      {
                        row.map((item, index) => {
                          console.log(item)
                          return(
                            <div key={`row-${cIndex} item-${index}`} className="item-image-container">
                              {
                                !item.empty && <img src={item.src}/>
                              }
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

export default Restaurant