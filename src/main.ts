import '@/assets/styles/style.css'
import { Application } from '@/Application'

function createApp() {
  return new Application('#app')
}

createApp()
  .run()
