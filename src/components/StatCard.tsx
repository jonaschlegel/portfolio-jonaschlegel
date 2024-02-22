import type { FC } from 'react';

import type { StatType } from '@/types/global';

const StatCard: FC<StatType> = ({ name, number }) => {
  return (
    <div className="flex flex-col items-center font-merriweather leading-snug">
      <p className="text-2xl font-bold tracking-tighter lg:text-4xl">
        {number}
      </p>
      <p className="text-center text-xs text-neutral-300 lg:text-sm">{name}</p>
    </div>
  );
};

export default StatCard;
