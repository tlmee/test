import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'موقع سريع',
  description: 'Next.js + TypeScript + Tailwind',
}

const nav = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'تواصل' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-zinc-950 text-zinc-50">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="font-semibold tracking-tight">
              موقع سريع
            </Link>
            <nav className="flex items-center gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1.5 text-sm text-zinc-200 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-zinc-400">
            © {new Date().getFullYear()} موقع سريع
          </div>
        </footer>
      </body>
    </html>
  )
}

