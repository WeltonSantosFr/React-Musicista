import { InputHTMLAttributes, forwardRef } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type = "text", ...props }, ref) => {
        return (
            <>
                        <input
                            type={type}
                            {...props}
                            ref={ref}
                            className="w-full h-10 rounded-sm placeholder:text-gray-4 placeholder:font-bold placeholder:text-center outline-none text-center font-medium text-black"
                        />
            </>
        )
    }
)



