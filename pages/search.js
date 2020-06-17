import Header from "../components/header"
import Head from 'next/head'
import { withRouter } from 'next/router'
import { items } from '../constants/items'
import { Desktop, Phone, DesktopLg, Tablet, TabletLand } from '../constants/screenWidth'
import Footer from "../components/footer"

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      category: "",
      searchInput: "",
      search: "",
      displaySearch:""
    }
  }

  componentDidUpdate() {
    window.addEventListener('resize', this.updateShowcaseRow)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateShowcaseRow)
  }

  componentDidMount() {
    const query = this.props.router.asPath.split('=', 2)

    this.setState({
      search: !!query ? query[1] : query[0]
    }, () => {
      this.updateShowcaseRow()
    })
  }

  updateSearch = e => {
    this.setState({
      searchInput: e.target.value
    })
  }

  confirmSearch = e => {
    this.setState({
      search: this.state.searchInput
    })
  }

  updateShowcaseRow = () => {
    let itemsPerRow = 4
    let tempColumnItems = []
    let tempArray = []

    if (window.innerWidth < Tablet) {
      itemsPerRow = 1
    } else if (window.innerWidth < TabletLand) {
      itemsPerRow = 2
    } else if (window.innerWidth < DesktopLg) {
      itemsPerRow = 3
    }

    const searchQuery = this.state.search.replace('+', ' ')

    const itemCategory = items.filter(item => (item.category === searchQuery || item.name.includes(searchQuery)))

    itemCategory.forEach((item, index) => {
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
      items: tempColumnItems,
      displaySearch: searchQuery
    })
  }

  render() {
    const { displaySearch, items, search } = this.state

    return(
      <React.Fragment>
        <Head>
          <title>Eukya Furniture</title>
        </Head>
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
            <div className="category-container">
              <div className="search-bar">
                <form onSubmit={this.updateSearch}>
                  <input className="search-input" placeholder="Search" name="search" onChange={this.updateSearch}/>
                  <button className="fas fa-search"/>
                </form>
              </div>
              <div className="results">
                { !!search ? `Search Results for "${displaySearch}"` : "" }
              </div>
              {
                items.map((row, cIndex) => {
                  return(
                    <div key={`row-${cIndex}`} className="item-image-row">
                      {
                        row.map((item, index) => {
                          return(
                            <div className="item-container"> 
                              <div key={`row-${cIndex} item-${index}`} className="item-image-container">
                                {
                                  !item.empty && <img src={item.src}/>
                                }
                              </div>
                              {
                                !item.empty && 
                                  <div className="item-description">
                                    <a>{item.name}</a>
                                    <div className="item-learn-more">
                                      Learn more
                                    </div>
                                  </div>
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
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withRouter(Search)