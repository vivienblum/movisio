import React, { Component } from "react";
import { connect } from "../../stores";

class Landing extends Component {
  handleLogin() {}

  render() {
    // this.props.userStore.login({
    //   username: 'margot',
    //   password: 'test'
    // })
    // this.props.userStore.all()
    // this.props.userStore.signUp({
    //   user : {
    //     username: 'margot',
    //     password: 'test',
    //     mail: 'test@test.com',
    //     image: '...'
    //   }
    // })
    return (
      <div className="landing-container">
        <h1>Movisio</h1>
        <p>GET STARTED</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userStore: state.userStore
});
export default connect(mapStateToProps)(Landing);
