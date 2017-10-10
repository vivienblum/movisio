const configuration = {
  production: {
    DEV_MODE: false,
    MOVISIO_API: "https://movisio-api.herokuapp.com/"
  },
  development: {
    MOVISIO_API: "http://localhost:3001",
    // MOVISIO_API: "https://movisio-api.herokuapp.com/",
    DEV_MODE: true
  }
}

const config = configuration[process.env.REACT_APP_ENV || process.env.NODE_ENV]
window.config = config
export default config
