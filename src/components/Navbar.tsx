'use client';

import { useState } from 'react';
import { MdDehaze } from 'react-icons/md';

import { navLinks } from '@/data/content';
import Logo from '@/logo/Logo';
import Button from '@/shared/Buttons/Button';
import ButtonSecondary from '@/shared/Buttons/ButtonSecondary';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };
  return (
    <div className="container mx-auto mb-12 flex items-center justify-between py-4">
      <div className="z-30">
        <Logo />
      </div>
      <div className="z-30 lg:hidden">
        <button type="button" aria-label="Save" onClick={handleToggleMenu}>
          <MdDehaze />
        </button>
      </div>
      <div
        className={`fixed top-0 z-10 flex  h-screen w-screen items-center bg-neutral-950 transition-all duration-500 lg:bg-transparent ${
          mobileOpen ? 'left-0' : '-left-full'
        }
            lg:static lg:size-auto`}
      >
        <ul className="flex w-full flex-col items-center gap-6 lg:flex-row lg:gap-8">
          {navLinks.map((navItem) => {
            return (
              <li key={navItem.name}>
                <Button href={navItem.href} onClick={handleToggleMenu}>
                  {navItem.name}
                </Button>
              </li>
            );
          })}
          <li className="lg:hidden">
            <ButtonSecondary onClick={handleToggleMenu}>
              Contact Me
            </ButtonSecondary>
          </li>
        </ul>
      </div>
      <div className="hidden lg:inline-flex">
        <ButtonSecondary>Contact Me</ButtonSecondary>
      </div>
    </div>
  );
};

export default Navbar;
