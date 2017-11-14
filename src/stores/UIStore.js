/* global Rollbar */
import { observable } from "mobx"

class UIStore {
  /** @deprecated */
  // @observable flash = {}
  // @observable showFlash = false

  /** @deprecated */
  closeFlash(e) {
    if (e) e.preventDefault()
    this.flash = {}
    this.showFlash = false
  }

  /** @deprecated */
  openFlash(message, type = "error", autoClose = false) {
    // Types can be error (red), default (transparent), or success (green)
    this.flash = { message, type }
    this.showFlash = true
    if (autoClose) {
      setTimeout(() => {
        this.flash = {}
        this.showFlash = false
      }, 5000)
    }
  }

  fixBrokenImage(e) {
    // e.target.src = require("../images/logos/logo-on-black.png")
  }

  /** @deprecated */
  rollbarError(err) {
    // ROLLBAR IS NOT YET INSTALLED
    if (window.Rollbar) {
      window.Rollbar.error(err)
    }
  }

  limitText(text, size) {
    if (text.length > size) {
      return `${text.slice(0, size)}...`
    }

    return text
  }

  /** @deprecated */
  disableBodyScroll() {
    this.bodyScroll = false
    document.getElementsByTagName("html")[0].className += "no-scroll"
  }

  /** @deprecated */
  enableBodyScroll() {
    const string = document.getElementsByTagName("html")[0].className
    document.getElementsByTagName("html")[0].className = string.replace(
      "no-scroll",
      ""
    )
  }

  /** @deprecated */
  capitalize(name) {
    if (name) return name.slice(0, 1).toUpperCase() + name.slice(1)
  }

  /** @deprecated */
  roundStat(stat, roundTo = 1000) {
    if (stat > 0) {
      return `${(stat / roundTo).toFixed(1)}K`
    }
    return 0
  }

  /** @deprecated */
  roundDecimal(stat, decimalPlace = 2) {
    if (stat) {
      const decimal = Math.pow(10, decimalPlace)
      return Math.round(stat * decimal) / decimal
    }
    return 0
  }

  /** @deprecated */
  formatEngagement(engagement) {
    return `${(engagement * 100).toFixed(1)}%`
  }

  /** @deprecated */
  formatTag(str) {
    if (str.indexOf("#") === -1) {
      return "#".concat(str)
    }
    return str
  }

  /** @deprecated */
  formatReach(reach) {
    if (reach > 1000000) {
      return `${(reach / 1000000).toFixed(2)}M`
    } else if (reach > 1000) {
      return `${(reach / 1000).toFixed(0)}K`
    } else if (reach === null || reach === undefined) {
      return "0"
    }
    return reach.toString()
  }

  /** @deprecated */
  formatPrice(price) {
    return `$${parseInt(price, 10).toFixed(2)}`
  }

  /** @deprecated */
  sanitizeInput(string) {
    return string.replace(/[^a-z0-9áéíóúñü /:?'\n.,_-]/gim, "")
  }

  /** @deprecated */
  pluralizeOrNot(number, string) {
    if (number === 1 || number === "1" || number === 0 || number === "0") {
      return string
    }
    return `${string}s`
  }
}

const store = new UIStore()
export default store
