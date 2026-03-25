import Link from 'next/link'
import { DbStatus } from '@/components/DbStatus'

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-8">
        <p className="text-sm text-zinc-300">React + TypeScript + Tailwind</p>
        <h1 className="mt-2 text-balance text-3xl font-semibold leading-tight sm:text-5xl">
          موقع Next.js سريع وجاهز خلال دقائق
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-zinc-200">
          ثلاث صفحات أساسية، تصميم نظيف، وأساس قوي توسّع عليه. إذا تبي أضيف صفحة خدمات/مدونة/لوحة تحكم قول لي.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/about"
            className="rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
          >
            اعرف أكثر
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white hover:bg-white/10"
          >
            تواصل معنا
          </Link>
        </div>
      </div>

      <DbStatus />

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: 'سريع', desc: 'App Router + إعدادات TypeScript جاهزة.' },
          { title: 'نظيف', desc: 'Layout واضح وNavigation بسيط.' },
          { title: 'قابل للتوسع', desc: 'تقدر تضيف صفحات بسهولة داخل `src/app`.' },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

