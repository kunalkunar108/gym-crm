import { ArrowRight, CheckCircle2, Circle, Dumbbell, Layers3, LockKeyhole, ShieldCheck, Workflow } from 'lucide-react'
import { isSupabaseConfigured } from './lib/supabase'
const setupSteps = [
  { label: 'React + TypeScript application initialized', done: true },
  { label: 'Routing, styling and UI foundations configured', done: true },
  { label: 'Supabase project credentials added', done: isSupabaseConfigured },
  { label: 'Multi-tenant database and RLS policies', done: false },
  { label: 'Authentication and gym onboarding', done: false },
]
function App() {
  const completed = setupSteps.filter((step) => step.done).length
  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-50 via-slate-50 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:py-12">
        <header className="flex items-center justify-between">
          <a className="flex items-center gap-3" href="/" aria-label="Gym Lead CRM home">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-950 text-white shadow-soft"><Dumbbell size={22} strokeWidth={2.3} /></span>
            <span><span className="block text-base font-bold tracking-tight">Gym Lead CRM</span><span className="block text-xs font-medium text-slate-500">Fitness sales workspace</span></span>
          </a>
          <span className="rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-blue-700">Foundation build · v0.1</span>
        </header>
        <section className="grid items-center gap-12 pb-16 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:pb-24 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm"><span className="h-2 w-2 rounded-full bg-emerald-500" />Project foundation initialized</div>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">Turn every gym enquiry into a <span className="text-electric-600">real opportunity.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">A focused sales workspace for gyms to capture leads, stay on top of follow-ups and understand what drives membership growth.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3"><a href="#setup" className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-navy-800">View setup progress <ArrowRight size={16} /></a><span className="text-xs font-medium text-slate-500">No demo data · Backend-first foundation</span></div>
          </div>
          <div className="relative">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-100/60 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5"><div><p className="text-sm font-bold text-slate-900">Platform architecture</p><p className="mt-1 text-xs text-slate-500">Designed for independent gym workspaces</p></div><ShieldCheck className="text-emerald-600" size={23} /></div>
              <div className="space-y-3 py-6">
                {[{ icon: Layers3, title: 'Tenant-aware application', detail: 'One app, isolated gym workspaces' }, { icon: LockKeyhole, title: 'PostgreSQL + Row Level Security', detail: 'Access enforced at the database layer' }, { icon: Workflow, title: 'Secure backend workflows', detail: 'Invitations, billing and privileged actions' }].map(({ icon: Icon, title, detail }) => <div key={title} className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-electric-600 shadow-sm"><Icon size={19} /></span><div><p className="text-sm font-semibold text-slate-900">{title}</p><p className="mt-1 text-xs leading-5 text-slate-500">{detail}</p></div></div>)}
              </div>
              <div className="rounded-xl bg-navy-950 p-4 text-white"><div className="flex items-center justify-between text-xs"><span className="font-semibold text-slate-200">Security is foundational</span><span className="text-blue-300">Phase 1</span></div><p className="mt-2 text-sm leading-6 text-slate-300">A gym identifier in a frontend query is not authorization. Database policies will verify every tenant boundary.</p></div>
            </div>
          </div>
        </section>
        <section id="setup" className="grid gap-6 border-t border-slate-200 py-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-electric-600">Build progress</p><h2 className="mt-3 text-2xl font-bold tracking-tight text-navy-950">Foundation checklist</h2><p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">The project is being built in verifiable phases. Database security and authentication come before CRM features.</p><div className="mt-6 flex items-end gap-2"><span className="text-4xl font-bold tracking-tight text-navy-950">{completed}/{setupSteps.length}</span><span className="pb-1 text-sm text-slate-500">foundation checks complete</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-electric-500 transition-all" style={{ width: `${(completed / setupSteps.length) * 100}%` }} /></div></div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7"><div className="space-y-5">{setupSteps.map((step) => <div key={step.label} className="flex items-center gap-3">{step.done ? <CheckCircle2 className="shrink-0 text-emerald-600" size={20} /> : <Circle className="shrink-0 text-slate-300" size={20} />}<span className={step.done ? 'text-sm font-medium text-slate-800' : 'text-sm text-slate-500'}>{step.label}</span>{step.label === 'Supabase project credentials added' && <span className={isSupabaseConfigured ? 'ml-auto text-xs font-semibold text-emerald-700' : 'ml-auto text-xs font-semibold text-amber-700'}>{isSupabaseConfigured ? 'Connected' : 'Awaiting setup'}</span>}</div>)}</div></div>
        </section>
        <footer className="flex flex-col gap-2 border-t border-slate-200 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><span>Gym Lead CRM · Built for independent fitness businesses</span><span>Secure by design. Shipped in phases.</span></footer>
      </div>
    </main>
  )
}
export default App