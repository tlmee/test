'use client'

import { useEffect, useState } from 'react'

type DbTestResponse = { ok: true } | { ok: false; error?: string }

type Status =
  | { state: 'idle' | 'loading' }
  | { state: 'ok' }
  | { state: 'error'; message: string }

export function DbStatus() {
  const [status, setStatus] = useState<Status>({ state: 'idle' })

  async function check() {
    setStatus({ state: 'loading' })
    try {
      const res = await fetch('/api/db-test', { cache: 'no-store' })
      const data = (await res.json()) as DbTestResponse

      if (res.ok && data.ok) {
        setStatus({ state: 'ok' })
      } else {
        setStatus({ state: 'error', message: 'error' in data && data.error ? data.error : 'DB test failed' })
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Network error'
      setStatus({ state: 'error', message })
    }
  }

  useEffect(() => {
    void check()
  }, [])

  const pill =
    status.state === 'ok'
      ? 'bg-emerald-500/15 text-emerald-200 border-emerald-400/20'
      : status.state === 'error'
        ? 'bg-rose-500/15 text-rose-200 border-rose-400/20'
        : 'bg-zinc-500/10 text-zinc-200 border-white/10'

  const label =
    status.state === 'ok' ? 'تم الاتصال' : status.state === 'error' ? 'لم يتم الاتصال' : status.state === 'loading' ? 'جاري الفحص…' : 'جاهز'

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">حالة الاتصال بقاعدة البيانات (MongoDB)</h2>
          <p className="text-sm text-zinc-300">يفحص endpoint `GET /api/db-test`.</p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-sm ${pill}`}>{label}</span>
          <button
            type="button"
            onClick={() => void check()}
            className="rounded-full border border-white/15 px-4 py-1.5 text-sm text-white hover:bg-white/10"
          >
            إعادة فحص
          </button>
        </div>
      </div>

      {status.state === 'error' ? (
        <div className="mt-4 rounded-xl border border-rose-400/20 bg-rose-500/10 p-3 text-sm text-rose-100">
          {status.message}
        </div>
      ) : null}
    </div>
  )
}

