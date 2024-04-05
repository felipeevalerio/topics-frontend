import { ComponentProps } from 'react'

type ButtonProps = ComponentProps<'button'>

export function Button(props: ButtonProps) {
  return (
    <button
      className="bg-orange-500 rounded-md p-1 w-32 hover:bg-orange-300 transition-colors"
      {...props}
    />
  )
}
