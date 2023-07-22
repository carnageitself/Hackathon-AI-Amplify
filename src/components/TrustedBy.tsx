import React from 'react';
import { BallCanvas } from '../canvas';
import { styles } from '../styles';
import { technologies } from '../constants';

const TrustedBy: React.FC = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className={`text-center ${styles.sectionHeadText}`}>
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
