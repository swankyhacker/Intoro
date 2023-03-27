export class Kana {
  constructor(data, type) {
    const { character, extra_note, level, mnemonic, reading, docId } = data
    this._type = type
    this._character = character
    this._extraNote = extra_note
    this._level = level
    this._mnemonic = mnemonic
    this._reading = reading
    this._docId = docId
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

  get mnemonic() {
    return this._mnemonic
  }

  get extraNote() {
    return this._extraNote
  }

  get docId() {
    return this._docId
  }
}
