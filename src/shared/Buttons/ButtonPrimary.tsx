import React from 'react'; // Ensure React is imported

import type { ButtonProps } from './Button';
import Button from './Button';

export interface ButtonPrimaryProps extends ButtonProps {
  email?: string; // Add an email prop to be used in the mailto link
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  className = '',
  email, // Destructure the email prop
  ...args
}) => {
  // Define the click handler
  const handleClick = () => {
    if (email) {
      // Use window.location.href to open the user's email client
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <Button
      className={`rounded-full bg-primary-accent font-semibold text-black disabled:bg-opacity-70 ${className}`}
      {...args}
      onClick={handleClick} // Attach the click handler to the Button component
    />
  );
};

export default ButtonPrimary;
