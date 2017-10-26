import { inject } from "mobx-react"

const connect = mapStateToProps => {
  return component => {
    return inject((stores, props, context) => {
      return mapStateToProps(context.mobxStores.state)
    })(component)
  }
}

export default connect
