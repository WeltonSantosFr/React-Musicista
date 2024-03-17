import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
}



export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <>
                <button
                    className={`w-full px-2 h-10 rounded-sm bg-none text-black font-bold text-base hover:bg-gray-3 flex justify-center gap-2 items-center dark:text-gray-4 dark:hover:bg-gray-7 ${className}`}
                    {...props}
                    ref={ref}>
                    {children}
                </button>
            </>
        )
    }
)