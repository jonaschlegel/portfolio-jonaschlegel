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
  return (
    <Button
      className={`rounded-full bg-primary-accent font-semibold text-black ${className}`}
      {...args}
      // Directly use a lambda function for onClick
      onClick={() => {
        if (email) {
          // Attempt to open the email client. Note: '_blank' might not work as expected for mailto links
          window.location.href = `mailto:${email}`;
        }
      }}
    />
  );
};

export default ButtonPrimary;
