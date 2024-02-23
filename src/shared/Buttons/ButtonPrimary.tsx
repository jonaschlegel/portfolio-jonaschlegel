'use client';

import React from 'react';

import type { ButtonProps } from './Button';
import Button from './Button';

export interface ButtonPrimaryProps extends ButtonProps {
  email?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
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
      className={`rounded-full bg-primary-accent font-semibold text-black ${className}`}
      {...args}
      onClick={handleClick}
    />
  );
};

export default ButtonPrimary;
