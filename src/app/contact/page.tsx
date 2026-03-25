export default function ContactPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">تواصل</h1>
        <p className="max-w-2xl text-zinc-200">
          حط بياناتك الحقيقية هنا لاحقًا (إيميل/واتساب/روابط). النموذج هذا شكله جاهز للواجهة بس بدون إرسال خلفي.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h2 className="text-lg font-semibold">بيانات سريعة</h2>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-400">البريد</dt>
              <dd className="text-zinc-200">you@example.com</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-zinc-400">الهاتف</dt>
              <dd className="text-zinc-200">+966 5X XXX XXXX</dd>
            </div>
          </dl>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="grid gap-3">
            <label className="grid gap-1 text-sm">
              <span className="text-zinc-300">الاسم</span>
              <input
                className="rounded-xl border border-white/10 bg-zinc-950/40 px-3 py-2 text-zinc-100 outline-none ring-0 placeholder:text-zinc-600 focus:border-white/20"
                placeholder="اسمك"
                name="name"
              />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="text-zinc-300">الرسالة</span>
              <textarea
                className="min-h-28 rounded-xl border border-white/10 bg-zinc-950/40 px-3 py-2 text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-white/20"
                placeholder="اكتب رسالتك هنا"
                name="message"
              />
            </label>
            <button
              type="button"
              className="mt-1 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
            >
              إرسال (واجهة فقط)
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

