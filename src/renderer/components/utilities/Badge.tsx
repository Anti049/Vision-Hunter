// React imports
import React from 'react';
// Library imports
import mergeClassNames from '@lib/utilities';

// Prop definitions
type Props = {
  color: string;
  animated?: boolean;
};

function Badge(props: Props) {
  const { color, animated } = props;
  const className = mergeClassNames(
    `bg-${color} rounded-full absolute top-1 left-1 w-4 h-4`,
    animated ? 'animate-pulse' : ''
  );

  return (
    <div className="bg-background w-6 h-6 top-0 absolute rounded-full content-center flex opacity-100 z-100">
      <span className={className} />
    </div>
  );
}

Badge.defaultProps = {
  animated: false,
};

export default Badge;
