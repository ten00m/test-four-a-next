import React, { FC } from 'react'

interface ICheckboxProps {
    checked: boolean
    onChange: (checked: boolean) => void
    disabled?: boolean
    label?: string | React.ReactNode
}

export const Checkbox: FC<ICheckboxProps> = ({
    checked,
    onChange,
    disabled = false,
    label,
}) => {
    return (
        <label className="group flex cursor-pointer items-center text-[0.75rem]">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                disabled={disabled}
                className="hidden"
            />
            <div
                className={`mr-2 flex h-7 w-7 shrink-0 items-center justify-center rounded border-2 border-[#606566] transition-colors ${
                    disabled
                        ? 'border-gray-200 opacity-30'
                        : checked
                          ? ''
                          : 'group-hover:border-gray-400'
                }`}
            >
                {!disabled && checked && (
                    <svg
                        className="text-primary h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        ></path>
                    </svg>
                )}
            </div>
            {label && (
                <span
                    className={`${disabled ? 'text-gray-700' : 'text-[#CDCDCD]'}`}
                >
                    {label}
                </span>
            )}
        </label>
    )
}
