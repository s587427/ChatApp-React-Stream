import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react"

export const Input = forwardRef<
  HTMLInputElement,
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> // 傳遞相同實際的props到inputElement
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={`py-1 px-2 border border-gray-400 focus:border-blue-500 outline-none rounded w-full ${className}`}
      ref={ref}
      {...rest}
    />
  )
})
