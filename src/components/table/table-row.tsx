import { ComponentProps } from 'react'

type TableRowProps = ComponentProps<'tr'>

export function TableRow(props: TableRowProps) {
  return <tr {...props} className="border-b border-white/10 hover:bg-white/5" />
}
