import Cookie from "js-cookie"
import UIStore from "../stores/UIStore"

export default class FetchResource {
  static get(url, body = null) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        const urlParams = this.getURLParams(body)
        fetch(url + urlParams, {
          headers
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data)
              })
            } else if (response.status === 403) {
              this.handleForbidden(response)
            } else {
              UIStore.rollbarError(response)
              reject(response)
            }
          })
          .catch(err => {
            UIStore.rollbarError(err)
            reject(err)
          })
      })
    })
  }

  static getFromAPI(url, body = null) {
    return new Promise((resolve, reject) => {
      this.getHeadersForAPI().then(headers => {
        const urlParams = this.getURLParams(body)
        fetch(url + urlParams, {
          headers
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data)
              })
            } else if (response.status === 403) {
              this.handleForbidden(response)
            } else {
              UIStore.rollbarError(response)
              reject(response)
            }
          })
          .catch(err => {
            UIStore.rollbarError(err)
            reject(err)
          })
      })
    })
  }

  static getURLParams(body) {
    if (body && typeof body === "object") {
      let params = ""
      Object.keys(body).forEach(key => {
        if (body[key]) {
          if (params.length === 0) {
            params += `?${key}=${body[key]}`
          } else {
            params += `&${key}=${body[key]}`
          }
        }
      })
      return params
    }
    return ""
  }

  static post(url, body) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          headers,
          body: JSON.stringify(body),
          method: "POST"
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data)
              })
            } else if (response.status === 403) {
              this.handleForbidden(response)
            } else {
              UIStore.rollbarError(response)
              reject(response)
            }
          })
          .catch(err => {
            UIStore.rollbarError(err)
            reject(err)
          })
      })
    })
  }

  static put(url, body) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          headers,
          body: JSON.stringify(body),
          method: "PUT"
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data)
              })
            } else if (response.status === 403) {
              this.handleForbidden(response)
            } else {
              UIStore.rollbarError(response)
              reject(response)
            }
          })
          .catch(err => {
            UIStore.rollbarError(err)
            reject(err)
          })
      })
    })
  }

  static putImages(url, files) {
    const formData = new FormData()
    formData.append("image", files)
    return new Promise((resolve, reject) => {
      this.getImageHeaders().then(headers => {
        fetch(url, {
          headers,
          body: formData,
          method: "PUT"
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data)
              })
            } else {
              UIStore.rollbarError(response)
              reject(response)
            }
          })
          .catch(err => {
            UIStore.rollbarError(err)
            reject(err)
          })
      })
    })
  }

  static patch(url, body) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          headers,
          body: JSON.stringify(body),
          method: "PATCH"
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data)
              })
            } else {
              UIStore.rollbarError(response)
              reject(response)
            }
          })
          .catch(err => {
            UIStore.rollbarError(err)
            reject(err)
          })
      })
    })
  }

  static delete(url) {
    return new Promise((resolve, reject) => {
      this.getHeaders().then(headers => {
        fetch(url, {
          method: "DELETE",
          headers
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data)
              })
            } else if (response.status === 403) {
              this.handleForbidden(response)
            } else {
              UIStore.rollbarError(response)
              reject(response)
            }
          })
          .catch(err => {
            UIStore.rollbarError(err)
            reject(err)
          })
      })
    })
  }

  static getHeaders() {
    return new Promise(resolve => {
      const headers = new Headers({
        Authorization: `${Cookie.get("mv_token")}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      })
      resolve(headers)
    })
  }

  static getHeadersForAPI() {
    return new Promise(resolve => {
      const headers = new Headers({
        Accept: "application/json",
        "Content-Type": "application/json"
      })
      resolve(headers)
    })
  }

  static getImageHeaders() {
    return new Promise(resolve => {
      const headers = new Headers({
        Authorization: `Bearer ${Cookie.get("mv_token")}`
      })
      resolve(headers)
    })
  }

  /** @deprecated */
  static handleForbidden(response) {
    // try {
    //   if (
    //     response.status === 403 &&
    //     window.location.pathname !== "/login" &&
    //     window.location.pathname !== "/signup"
    //   ) {
    //     window.location.href = "/login"
    //   }
    // } catch (err) {
    //   return
    // }
  }
}
