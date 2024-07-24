import {ForwardedRef, forwardRef, TextareaHTMLAttributes} from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = forwardRef((props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return <textarea {...props} ref={ref} />
})

export default TextArea
