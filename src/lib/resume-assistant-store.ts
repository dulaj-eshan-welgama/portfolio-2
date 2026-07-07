type Listener = (open: boolean) => void

let open = false
const listeners = new Set<Listener>()

export const showResumeAssistant = {
  get state() {
    return open
  },
  setState(updater: (prev: boolean) => boolean) {
    open = updater(open)
    listeners.forEach((listener) => listener(open))
  },
  subscribe(callback: Listener) {
    listeners.add(callback)
    callback(open)
    return {
      unsubscribe() {
        listeners.delete(callback)
      },
    }
  },
}
