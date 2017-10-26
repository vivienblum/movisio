import React, { Component } from "react"
import { observer } from "mobx-react"
// import { asReactiveLoader } from "mobx-models/reactiveLoader"
import { connect } from "../../stores"
import { HeaderMovisio } from "../../components/HeaderMovisio"
import { FooterMovisio } from "../../components/FooterMovisio"

@observer
class BasicContainer extends Component {
  componentWillMount() {
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

export default connect(mapStateToProps)(BasicContainer)
