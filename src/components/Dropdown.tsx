import React from 'react';

interface DropdownProps {
    id: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
    label?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ id, value, options, onChange, className, label }) => {
    return (
        <div className="flex items-center">
            {label && <label htmlFor={id} className="mx-2 font-semibold">{label}</label>}
            <select
                id={id}
                value={value}
                onChange={onChange}
                className={`p-2 border rounded ${className}`}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
