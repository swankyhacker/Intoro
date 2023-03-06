import { Kana } from "./kana"

export class UserKana extends Kana {
  constructor(data, type, unlocked) {
    const { progress } = data
    super(data, type)
    this._unlocked = unlocked
    this._progress = progress ? progress : 0
  }

  get unlocked() {
    return this._unlocked
  }

  get progress() {
    return this._progress
  }
}
