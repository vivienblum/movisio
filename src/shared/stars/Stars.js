import React from "react"
import MdStarHalf from "react-icons/lib/md/star-half"
import MdStarOutline from "react-icons/lib/md/star-outline"
import MdStar from "react-icons/lib/md/star"

export default function Stars({ rate, base = 10 }) {
  const baseStars = 5
  const avgRate = rate / base * baseStars
  const stars = new Array(baseStars)
  for (var i = 0; i < stars.length; i++) {
    if (avgRate > i) {
      if (avgRate > i + 1) {
        stars[i] = 1
      } else if (avgRate > i + 0.5) {
        stars[i] = 0.5
      } else {
        stars[i] = 0
      }
    } else {
      stars[i] = 0
    }
  }
  return (
    <span>
      {stars.map((star, i) => {
        switch (star) {
          case 1:
            return <MdStar key={i} />
          case 0.5:
            return <MdStarHalf key={i} />
          default:
            return <MdStarOutline key={i} />
        }
      })}
    </span>
  )
}
