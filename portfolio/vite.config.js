import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173,
    allowedHosts: ['.ngrok.io', '.ngrok-free.app', 'localhost', 'skeotaku.loca.lt'],
  }
})
