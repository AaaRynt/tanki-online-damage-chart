// src/App.tsx
import { Footer, Header, Main } from '@/layout/index'

export default function App() {
  return (
    <div className="flex h-screen flex-col items-center overflow-hidden">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
