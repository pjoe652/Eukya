import Header from "../components/header"
import Footer from '../components/footer'

class About extends React.Component {

  render() {
    return(
        <div className="main-container">
          <Header/>
          <div className="about-container">
            <div className="title">
              <a>About Us</a>
            </div>
            <div className="coverimage">
              <img src="warehouse.png"></img>
            </div>
            <div className="whoweare">
              <div className="whonow">
                <a className="question"> Who We Are </a>
                <a>Our company was formed in 2001 in Los Angeles, California with the goal of becoming an integral supplier of contract furnishings to the foodservice and hospitality industries. In total our management team now boasts decades of specific industry experience that shows throughout our daily operation. The growth we have experienced is a testament to our dedication to quality, competitiveness, on-time deliveries, and un-matched customer service.</a>
              </div>
              <div className="whonow">
                <a className="question"> What We Make </a>
                <a>We take pride in servicing your needs; from the local business to the largest of chains you are assured the same attention to detail and commitment to your satisfaction. Our diverse manufacturing capabilities along with our stock products has enable us to service many markets from restaurants to hotels. Whether you find something from our quick ship product offering or you are looking for something more design oriented we are eager to satisfy your furniture requirements. If you have something in mind that we don’t show on-line please let us know what you are looking for and we will see if we can manufacture it for you.</a>
              </div>
              <div className="whonow">
                <a className="question"> How We Deliver </a>
                <a>We are manufacturers and importers of contract furniture committed to delivering consistent product to the marketplace. We ship from a convenient and strategic warehouses located in California. In our manufacturing process we use 100% European Beechwood exclusively for all of our wood chairs and barstools as well as utilizing the finest stains, finishes, and upholsteries. Additionally, we secure the best quality steel and aluminum for use in our indoor metal product line and outdoor furniture utilizing the finest powdercoat finishes available. </a>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    )
  }
}

export default About