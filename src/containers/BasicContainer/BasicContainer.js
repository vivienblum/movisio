import React, { Component } from "react"
import { connect } from "../../stores"
import { HeaderMovisio } from "../../components/HeaderMovisio"
import { FooterMovisio } from "../../components/FooterMovisio"

class BasicContainer extends Component {
  componentDidMount() {
    // this.props.userStore.initializeUser()
    console.log(this.props.user.movies)
  }

  // TODO make a styled components
  render() {
    const { children } = this.props
    return (
      <div>
        <HeaderMovisio />
        <div style={{ minHeight: "95vh" }}>{children}</div>
        <FooterMovisio />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // userStore: state.userStore,
  user: state.userStore.user
})
export default connect(mapStateToProps)(BasicContainer)
