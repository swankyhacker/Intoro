export class Kana {
  constructor(data, type) {
    const { character, extra_note, level, mnemonic, reading } = data
    this._type = type
    this._character = character
    this._extraNote = extra_note
    this._level = level
    this._mnemonic = mnemonic
    this._reading = reading
  }

  get character() {
    return this._character
  }

  get type() {
    return this._type
  }

  get level() {
    return this._level
  }

  get reading() {
    return this._reading
  }
}
