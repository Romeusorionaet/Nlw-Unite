import { ComponentProps } from 'react'

type TableHeaderProps = ComponentProps<'th'>

export function TableHeader(props: TableHeaderProps) {
  return (
    <th {...props} className="px-2.5 py-3 text-left text-sm font-semibold" />
  )
}
