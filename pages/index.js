import HomePage from './home'
import Router from 'next/router'

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
        <HomePage/>
      </React.Fragment>
    )
  }
}

export default Home