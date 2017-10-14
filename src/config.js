const configuration = {
  production: {
    DEV_MODE: false,
    MOVISIO_API: "https://movisio-api.herokuapp.com/",
    TMDB_API: "https://api.themoviedb.org/",
    TMDB_KEY: "83885e48ab6b1a3694b0800d7c668c20"
  },
  development: {
    // MOVISIO_API: "http://localhost:3001",
    MOVISIO_API: "https://movisio-api.herokuapp.com/",
    TMDB_API: "https://api.themoviedb.org/3/",
    POSTER_PATH: "https://image.tmdb.org/t/p/w500/",
    TMDB_KEY: "83885e48ab6b1a3694b0800d7c668c20",
    DEV_MODE: true
  }
}

const config = configuration[process.env.REACT_APP_ENV || process.env.NODE_ENV]
window.config = config
export default config
