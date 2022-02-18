import { b } from '@test/b'

export class Num {
  static id = 0
  constructor (num) {
    Num.id++
    this.fn = b(num)
  }
  get value () {
    return this.fn()
  }
  set value (num) {
    return this.fn(num)
  }
}
