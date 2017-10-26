import React, { Component } from "react"
import { connect } from "../../stores"
import { HeaderMovisio } from "../../components/HeaderMovisio"
import { FooterMovisio } from "../../components/FooterMovisio"

class BasicContainer extends Component {
  componentWillMount() {
    // this.props.userStore.initializeUser()
    // console.log(this.props.user.id)
    // if (this.props.user.id === null) {
    //   window.location.pathname = "/"
    // }
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

const mapStateToProps = ({ userStore }) => {
  return {
    user: userStore.user
  }
}

// const mapStateToProps = state => ({
//   // userStore: state.userStore,
//   user: state.userStore.user
// })
export default connect(mapStateToProps)(BasicContainer)
