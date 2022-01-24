// React imports
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// Library imports
import mergeClassNames from '@lib/utilities';
// Component imports
import Badge from '@components/utilities/Badge';

// Type definitions
export type Alert = {
  title: string;
  message: string;
};

// Prop definitions
type Props = {
  title: string;
  link: string;
  icon: string;
  alerts?: Alert[];
};

// Function definition
const Channel = (props: Props) => {
  // Alerts
  const [alertCount, setAlertCount] = useState(1);
  const { title, link, icon, alerts } = props;
  const router = useLocation();
  const channelActive = router.pathname === link;

  useEffect(() => {
    if (channelActive) {
      setAlertCount(0);
    }
  }, [channelActive]);

  // Initialization
  // if (alerts.length) setAlertCount(alerts.length);

  return (
    <div className="channel-button group cursor-pointer">
      <div
        className={mergeClassNames(
          'bg-background w-6 h-6 -top-1 -right-1 absolute rounded-full content-center flex opacity-100 z-10 delay-500 transition-all ease-linear',
          alertCount === 0 ? 'scale-0' : 'scale-100'
        )}
      >
        <span
          className={mergeClassNames(
            'bg-red rounded-full absolute top-1 left-1 w-4 h-4 transition-all ease-linear',
            channelActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'
          )}
        />
      </div>
      <NavLink
        to={link}
        className={({ isActive }) =>
          mergeClassNames(
            isActive
              ? 'bg-navigation rounded-xl'
              : 'opacity-60 group-hover:opacity-100 group-hover:bg-navigation-hover',
            'channel-icon has-tooltip shadow-lg group-hover:rounded-xl transition-all ease-linear'
          )
        }
      >
        <img src={icon} alt={icon} className="object-contain w-full h-full" />
        <span className="tooltip z-20 text-right rounded-lg bg-background group-hover:opacity-100 -top-1">
          {title}
        </span>
      </NavLink>
    </div>
  );
};

Channel.defaultProps = {
  alerts: [],
};

export default Channel;
