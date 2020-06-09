import Header from "./header"

class Restaurant extends React.Component {

  render() {
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
              <div className="item">
                <img src="/jackinthebox.png"/>
              </div>
              <div className="item">
                <img src="/jackinthebox.png"/>
              </div>
              <div className="item">
                <img src="/jackinthebox.png"/>
              </div>
              <div className="item">
                <img src="/jackinthebox.png"/>
              </div>
              
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Restaurant