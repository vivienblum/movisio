import React, { Component } from "react"
import { connect } from "../../stores"
// import config from "../config"

class Landing extends Component {
  handleLogin() {}

  componentWillMount() {
    this.props.userStore.login({
      username: "margot",
      password: "test"
    })
    // this.props.userStore.test()
    //   $.get({
    //    url: `${config.MOVISIO_API}/movies`
    //  })
  }

  componentDidMount() {
    this.props.userStore.initialize()
    // this.props.userStore.all()
  }

  render() {
    // this.props.userStore
    //   .login({
    //     username: "margot",
    //     password: "test"
    //   })
    // this.props.userStore.all()
    // this.props.userStore.signUp({
    //   user : {
    //     username: 'margot',
    //     password: 'test',
    //     email: 'test@test.com',
    //     image: '...'
    //   }
    // })
    return (
      <div className="landing-container">
        <p>GET STARTED</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userStore: state.userStore
})
export default connect(mapStateToProps)(Landing)
