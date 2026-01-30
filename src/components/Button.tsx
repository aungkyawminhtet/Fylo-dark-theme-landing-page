import { type ReactNode } from 'react'
interface buttonProps {
  children: ReactNode
  className? : string
}

const Button = ({children, className}: buttonProps) => {
  return (
    <button className={`px-5 py-3 rounded-full bg-sky-500 ${className} font-semibold font-sans hover:bg-sky-600 hover:scale-102 duration-300`}>
      {children}
    </button>
  )
}

export default Button
