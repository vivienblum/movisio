import React, { Component } from "react"
import { connect } from "../../stores"
import { HeaderMovisio } from "../../components/HeaderMovisio"
import { FooterMovisio } from "../../components/FooterMovisio"

class BasicContainer extends Component {
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

export default connect(mapStateToProps)(BasicContainer)
