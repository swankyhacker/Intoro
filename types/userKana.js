import { add, getUnixTime, startOfHour } from "date-fns"

import { apprenticeConfig, tierConfig, tiers } from "./config"
import { Kana } from "./kana"

export class UserKana extends Kana {
  constructor(data, type, unlocked) {
    const {
      progress,
      highest_tier,
      kana_id,
      tier,
      user_mnemonic,
      review_time,
    } = data
    super(data, type)
    this._highest_tier = highest_tier
    this._review_time = review_time
    this._kana_id = kana_id
    this._user_mnemonic = user_mnemonic || ""
    this._tier = tier
    this._unlocked = unlocked
    this._progress = progress ? progress : 0
    this._isReviewed = false
    this.data = data
  }

  get unlocked() {
    return this._unlocked
  }

  get progress() {
    return this._progress
  }

  get isReviewed() {
    return this._isReviewed()
  }

  get highest_tier() {
    return this._highest_tier
  }

  get review_time() {
    return this._review_time
  }

  get metadata() {
    return {
      highest_tier: this._highest_tier,
      review_time: this._review_time,
      kana_id: this._kana_id,
      user_mnemonic: this._user_mnemonic,
      tier: this._tier,
      type: this._type,
      progress: this._progress,
    }
  }

  updateReviewStatus() {
    this._isReviewed = true
  }

  increaseTier() {
    // If progress bars are less than 5 // number of items in apprenticeConfig
    if (
      this._highest_tier === tiers[0] &&
      this._progress < apprenticeConfig.length
    )
      return
    const tierIndex = tiers.indexOf(this._highest_tier)
    // If the highest tier has already been reached
    if (tierIndex + 1 > tierConfig.length) return
    this._highest_tier = tiers[tierIndex + 1]
    this._tier = tiers[tierIndex + 1]
  }

  decreaseTier() {
    if (this._highest_tier === tiers[0] || this._tier === tiers[0]) return
    this._tier = tiers[tierIndex - 1]
  }

  increaseProgress() {
    if (this._highest_tier === tiers[0]) {
      this._progress += 1
    }
  }

  decreaseProgress() {
    if (this._highest_tier === tiers[0]) {
      this._progress === 0 ? 0 : this._progress - 1
    }
  }

  scheduleNextReview() {
    const currentTime = new Date()
    let reviewTime
    if (this._highest_tier === tiers[0]) {
      const config = apprenticeConfig
      reviewTime = add(currentTime, {
        [config[this._progress].type]: config[this._progress].value,
      })
    } else {
      const config = tierConfig
      const tierIndex = tiers.indexOf(this._tier)
      reviewTime = add(currentTime, {
        [config[tierIndex].type]: config[tierIndex].value,
      })
    }
    this._review_time = getUnixTime(startOfHour(reviewTime))
  }

  confirmReview(isCorrect) {
    if (this._isReviewed === true) return
    if (isCorrect === true) {
      this.increaseProgress()
      this.increaseTier()
    } else {
      this.decreaseProgress()
      this.decreaseTier()
    }
    this.scheduleNextReview()
  }
}
