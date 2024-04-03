import { ComponentProps } from 'react'

interface IconButtonProps extends ComponentProps<'button'> {
  transparent?: boolean
}

export function IconButton({
  transparent = true,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      data-transparent={transparent}
      data-disabled={disabled}
      className="rounded-md border border-white/10 bg-white/10 p-1.5 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:bg-black/10 data-[transparent=true]:bg-black/20"
    />
  )
}
