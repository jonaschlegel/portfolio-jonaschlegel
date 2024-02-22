import Link from 'next/link';
import React from 'react';

import { footerdata } from '@/data/content';
import ButtonPrimary from '@/shared/Buttons/ButtonPrimary';

import SocialItem from './SocialItem';

const Footer = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="mb-12 text-center">
        <p className="mb-3 font-merriweather text-3xl font-bold md:text-5xl">
          {footerdata.heading}
        </p>
        <div>
          <ButtonPrimary email="jona.schlegel@gmail.com">
            Work With Me
          </ButtonPrimary>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-center gap-6">
          {footerdata.navLinks.map((navItem) => {
            return (
              <Link key={navItem.name} href={navItem.href}>
                {navItem.name}
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center gap-4">
          {footerdata.socialLinks.map((socialItem) => {
            return <SocialItem key={socialItem.href} {...socialItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
