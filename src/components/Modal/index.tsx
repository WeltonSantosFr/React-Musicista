import { FormHTMLAttributes, ReactNode, forwardRef } from "react"

type FormProps = FormHTMLAttributes<HTMLFormElement>

interface ModalProps extends FormProps {
    children: ReactNode
    open:boolean
}
export const Modal = forwardRef<HTMLFormElement, ModalProps>(
    ({children, open, ...props }, ref) => {

        return (
            <div className={`fixed top-0 left-0 w-full h-full flex justify-end bg-opacity-0 -z-20`}>
                <form
                    className={`bg-gray-3 dark:bg-gray-6 w-full md:w-2/4 lg:w-2/4 mt-12 min-h-0 max-h-screen rounded-none flex flex-col items-center transition ${open ? 'translate-x-0': 'translate-x-full'}`}
                    {...props}
                    ref={ref}
                >
                    {children}
                </form>
            </div>
        )
    }
) 
