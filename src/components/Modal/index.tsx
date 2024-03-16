import { FormHTMLAttributes, ReactNode, forwardRef } from "react"

type FormProps = FormHTMLAttributes<HTMLFormElement>
interface ModalProps extends FormProps {
    children: ReactNode
}
export const Modal = forwardRef<HTMLFormElement, ModalProps>(
    ({children, ...props }, ref) => {

        return (
            <div className="fixed top-0 left-0 w-screen h-screen bg-gray-1 z-20 flex items-center justify-center bg-opacity-80">
                <form
                    className="bg-gray-3 w-11/12 md:w-2/4 lg:w-1/4 h-fit rounded-xl flex flex-col items-center justify-evenly"
                    {...props}
                    ref={ref}
                >
                    {children}
                </form>
            </div>
        )
    }
) 
