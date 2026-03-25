export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">من نحن</h1>
      <p className="max-w-2xl text-zinc-200">
        هذا قالب Next.js بسيط وسريع للتجارب أو كبداية لموقع شركة/منتج. مبني على TypeScript وTailwind عشان التطوير يكون
        أسهل وأسرع.
      </p>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
        <h2 className="text-lg font-semibold">ليش Next.js؟</h2>
        <ul className="mt-2 list-inside list-disc text-sm text-zinc-300">
          <li>Routing جاهز بالملفات داخل `app/`</li>
          <li>أداء ممتاز وSEO أفضل</li>
          <li>سهولة نشر على Vercel وغيرها</li>
        </ul>
      </div>
    </section>
  )
}

