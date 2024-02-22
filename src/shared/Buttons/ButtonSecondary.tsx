import React from 'react';

import type { ButtonProps } from './Button';
import Button from './Button';

export interface ButtonSecondaryProps extends ButtonProps {
  href?: any;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  className = '',
  ...args
}) => {
  return (
    <Button
      className={`rounded-full border font-semibold text-white disabled:bg-opacity-70 ${className}`}
      {...args}
    />
  );
};

export default ButtonSecondary;
