import clsx from 'clsx'

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-colorPrimary focus:bg-white focus:outline-none focus:ring-colorPrimary sm:text-sm'

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input aria-label='label' id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}
