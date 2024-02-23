'use client';

import React from 'react';
import type { ButtonProps } from './Button';
import Button from './Button';

export interface ButtonSecondaryProps extends ButtonProps {
  email?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  email,
  ...args
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent the default action
    if (email) {
      // Open the email client in a new window/tab
      window.open(`mailto:${email}`);
    }
  };

  return (
    <Button
      className={`rounded-full border font-semibold text-white ${className}`}
      {...args}
      onClick={handleClick} // Use the handleClick function
    />
  );
};

export default ButtonSecondary;
