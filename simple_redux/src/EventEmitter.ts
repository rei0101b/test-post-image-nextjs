export default class EventEmitter {
  _handlers: any = {}

  constructor() {
    this._handlers = {}
  }

  on(type: string, handler: any) {
    if (typeof this._handlers[type] === 'undefined') {
      this._handlers[type] = []
    }

    this._handlers[type].push(handler)
  }

  emit(type: string, data?: any) {
    const handlers = this._handlers[type] || []
    for (let i = 0; i < handlers.length; i++) {
      const handler = handlers[i]
      handler.call(this, data)
    }
  }

  off(type: string, handler: any) {
    const handlers = this._handlers[type] || []
    for (let i = 0; i < handlers.length; i++) {
      const ownHandler = handlers[i]
      if (ownHandler === handler) {
        handlers.splice(i, 1)
      }
    }
  }
}
