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
  return (
    <Button
      className={`rounded-full border font-semibold text-white ${className}`}
      {...args}
      onClick={() => {
        if (email) {
          window.location.href = `mailto:${email}`;
        }
      }}
    />
  );
};

export default ButtonSecondary;
