import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    context: {
      locale: string;
      send:(way:string, data?:object)=> void;
      sendPromise:(way:string, data?:object)=> Promise<any>;
    }
  }
}
