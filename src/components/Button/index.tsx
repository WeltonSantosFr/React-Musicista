import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
}



export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <>
                <button
                    className={`w-full h-10 rounded-sm bg-black text-white font-bold text-base hover:bg-gray-7 flex justify-center items-center ${className}`}
                    {...props}
                    ref={ref}>
                    {children}
                </button>
            </>
        )
    }
)