import Link from 'next/link'

export function SignLink({ href, children }) {
  return (
    <Link
      href={href}
      className="px-6 py-2 text-sm font-semibold text-center text-slate-700 hover:bg-colorPrimary hover:text-white group inline-flex ring-1 ring-col items-center justify-center rounded-full focus:outline-none"
    >
      {children}
    </Link>
  )
}
