import React from 'react'
import classnames from 'classnames';


const submitButtonClass = classnames(
    'py-3',
    'rounded',
    'bg-rose-200',
    'hover:bg-rose-400',
    'w-20',
    'm-2',
    'flex',
    'justify-self-center',
    'items-center',
    'justify-center',
)

const SubmitButton = ({ onClick }) => {
    return (
        <button className={submitButtonClass}
            onClick={onClick}
        >Submit</button>
    )
}

export { SubmitButton }
