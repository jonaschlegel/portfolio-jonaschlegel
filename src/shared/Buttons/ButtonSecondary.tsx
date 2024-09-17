'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

import type { ButtonProps } from './Button';
import Button from './Button';

export interface ButtonSecondaryProps extends ButtonProps {
  email?: string;
  linkToContact?: boolean;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  email,
  linkToContact = false,
  ...args
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    } else if (linkToContact) {
      router.push('/contact');
    }
  };

  return (
    <Button
      className={`rounded-full border font-semibold text-white ${className}`}
      {...args}
      onClick={handleClick}
    />
  );
};

export default ButtonSecondary;
