import Header from "../components/header"
import Footer from '../components/footer'

class Contact extends React.Component {

  render() {
    return(
        <div className="main-container">
          <Header/>
          <div className="contact-container">
            <div className="title">
              <a>Contact Us</a>
            </div>
            <div className="coverimage">
              <img src="warehouse.png"></img>
            </div>
            <div className="description">
              <a> We'd love to help! Send us a message or visit us for any help or information.</a>
            </div>
            <div className="twothings">
              <div className="contactinfo">
                  <a> Your Name </a>
                  <input type="text"/>
                  <a> Email </a>
                  <input type="text"/>
                  <a> Message </a>
                  <textarea className="biginput" type="text"/>
                  <a></a>
                  <input type="button" className="button" value="Submit"/>
              </div>
              <div className="map">
                <div className="icons">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div className="info">
                  <div className="onething">
                    <a>233 S 7th Ave</a>
                    <a>City Of Industry, CA 91746</a>
                  </div>
                  <div className="onething">
                    <a> 626.354.9121</a> 
                  </div>
                  <div className="onething">
                    <a> wdzhang2000@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
    )
  }
}

export default Contact