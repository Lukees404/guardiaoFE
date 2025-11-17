import React from 'react';
import LogoIcon from '../../components/icons/LogoIcon';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon className="h-8 w-8 text-guardiao-cinza-escuro" />
      <span className="text-2xl font-semibold text-guardiao-cinza-escuro">
        Guardião Senior
      </span>
    </div>
  );
};

export default Logo;