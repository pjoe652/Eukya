import Head from 'next/head'
import HomePage from './home'
import Router from 'next/router'
import Restaurant from './restaurant'

class Home extends React.Component {
  state = {
    route: ''
  }

  setRoute = route => {
    console.log(route)
    this.setState({
      route: route
    })
  }

  componentDidMount() {
    this.setState({
      route: Router.route
    })
    console.log(this.state.route)
  }

  render() {
    const { route } = this.state

    return (
      <React.Fragment>
        <Head>
          <title>Eukya Furniture</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'/>
          <script src="https://kit.fontawesome.com/ca7ff47d1e.js" crossOrigin="anonymous"/>
        </Head>
        <HomePage/>
      </React.Fragment>
    )
  }
}

export default Home