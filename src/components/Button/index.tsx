import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode;
}



export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <>
                <button
                    className={`w-full px-2 h-10 rounded-sm bg-black text-white font-bold text-base hover:bg-gray-7 flex justify-center items-center dark:bg-white dark:text-black ${className}`}
                    {...props}
                    ref={ref}>
                    {children}
                </button>
            </>
        )
    }
)