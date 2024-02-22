import type { FC, ReactNode } from 'react';

const BannerText: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <p className="text-center font-merriweather text-xs font-bold tracking-tighter lg:text-2xl">
      {children}
    </p>
  );
};

export default BannerText;
