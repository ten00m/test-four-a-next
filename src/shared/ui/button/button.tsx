import React, { FC } from 'react'

interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    children: React.ReactNode
}

export const Button: FC<IButtonProps> = ({
    variant = 'primary',
    children,
    className = '',
    ...props
}) => {
    const baseClasses =
        'px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95'

    const variantClasses = {
        primary:
            'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary:
            'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    }

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    )
}
