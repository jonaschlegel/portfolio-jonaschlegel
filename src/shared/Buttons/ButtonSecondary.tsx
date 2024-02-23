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
  // Directly return the Button component
  return (
    <Button
      className={`rounded-full border font-semibold text-white ${className}`}
      {...args}
      // Use a lambda function to match the expected onClick signature
      onClick={() => {
        if (email) {
          // Open the email client in a new window/tab
          window.location.href = `mailto:${email}`;
        }
      }}
    />
  );
};

export default ButtonSecondary;
