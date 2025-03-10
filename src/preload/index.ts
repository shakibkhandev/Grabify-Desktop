import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language,
    send: (way: string, data?: object)=>{
      ipcRenderer.send(way, data)
    },
    sendPromise: async(way: string, data?:object)=>{
      return await ipcRenderer.invoke(way, data)
    }
  })
} catch (error) {
  console.error(error)
}