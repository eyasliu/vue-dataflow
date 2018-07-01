import { get } from './util'

class Action {
  constructor(ctx, config) {
    this.config = config
    this.context = ctx
  }

  data() {
    return typeof this.config.data === 'function' ? this.config.data() : this.config.data
  }

  injectRawData() {
    const data = this.data()
    return Object.assign(this.context, data)
  }

  injectComputed() {
    const computed = this.config.computed || {}

    for(let [key, val] of Object.entries(computed)) {
      if (typeof val !== 'function') {
        this.context[key] = val
        continue;
      }
      
      Object.defineProperty(this.context, key, {
        get: () => {
          return val.call(this.context)
        }
      })
    }
  }

  injectWatch() {
    const watch = this.config.watch || {}

    for(let [key, handler] of Object.entries(watch)) {
      if (typeof handler !== 'function') {
        continue;
      }

      this.setWatch(key, handler)
      
    }
  }

  setWatch(key, handler) {
    const parentPathArr = key.split('.')
    const keyName = parentPathArr.pop()
    const parentPath = parentPathArr.join('.')
    const parent = get(this.context, parentPath)

    if(!parent) {
      return
    }

    let rawVal = parent[keyName]
    delete parent[keyName]
    Object.defineProperty(parent, keyName, {
      get: () => {
        return rawVal
      },
      set: (val) => {
        handler.call(this.context, val, rawVal)
        rawVal = val
        return val
      }
    })
  }

  unWatch(key) {
    const parentPathArr = key.split('.')
    const keyName = parentPathArr.pop()
    const parentPath = parentPathArr.join('.')
    const parent = get(this.context, parentPath)

    if(!parent) {
      return
    }
    console.error(new Error('sorry, we are not implement yet'))
    // Object.defineProperty(parent, keyName, {
    //   set: (val) => {
    //     return val
    //   }
    // })
  }
}

export default function Store(config) {
  this.__store__ = new Action(this, config)
  
  const action = this.__store__

  action.injectRawData()
  action.injectComputed()
  action.injectWatch()

  this.$watch = action.setWatch.bind(action)
  this.$unwatch = action.unWatch.bind(action)

}