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
        'px-4 py-2 text-[#191E1F] font-bold rounded-[1.125rem] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

    const variantClasses = {
        primary: 'bg-primary hover:bg-primary focus:ring-primary',
        secondary:
            'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500',
    }

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    )
}
