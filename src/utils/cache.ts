class LocalCache {
  storage: Storage

  constructor(st: Storage) {
    this.storage = st === localStorage ? localStorage : sessionStorage
  }

  setItem(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  removeItem(key: string) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  length() {
    return this.storage.length
  }
}

const localCache = new LocalCache(window.localStorage)
const sessionCache = new LocalCache(window.sessionStorage)
export { localCache, sessionCache }
