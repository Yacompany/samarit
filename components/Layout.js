import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* SAMRIT Style Header */}
      <Header />

      {/* Page content */}
      <main className="flex-grow">{children}</main>

      {/* SAMRIT style Footer */}
      <Footer />
    </div>
  )
}
