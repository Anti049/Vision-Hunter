/* eslint-disable import/no-dynamic-require */
// React imports
import { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ipcRenderer } from 'electron';
// Asset imports
import HomeImage from '@assets/images/navigation/home.png';
import CharacterImage from '@assets/images/navigation/characters.png';
import WishImage from '@assets/images/navigation/wish.png';
import CalculatorImage from '@assets/images/navigation/calculator.png';
import TodoImage from '@assets/images/navigation/todos.png';
import ItemsImage from '@assets/images/navigation/items.png';
import TimelineImage from '@assets/images/navigation/timeline.png';
import SettingsImage from '@assets/images/navigation/settings.png';
import PaimonImage from '@assets/images/paimon.png';
// Library imports
import mergeClassNames from '@lib/utilities';
// Component imports
import TitleBar from '@components/utilities/TitleBar';
import Badge from '@components/utilities/Badge';
import Channel from '@components/layouts/Channel';

// Prop definitions
type Props = {
  children: Element;
};

const SidebarIcon = ({
  title,
  icon,
  link,
}: {
  title: string;
  icon: string;
  link: string;
}) => {
  const active = useLocation().pathname === link;
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        mergeClassNames(
          isActive
            ? 'bg-navigation rounded-xl'
            : 'opacity-60 hover:opacity-100 hover:bg-navigation-hover',
          'sidebar-icon has-tooltip shadow-lg group'
        )
      }
    >
      <img src={icon} alt={icon} className="object-contain w-full h-full" />
      <span className="tooltip z-20 text-right rounded-lg bg-background group-hover:opacity-100">
        {title}
      </span>
    </NavLink>
  );
};

const SidebarLayout: FC<React.ReactElement> = ({ children }) => {
  const [mini, setMini] = useState(false);
  const navigation = [
    {
      title: 'Home',
      link: '/',
      image: HomeImage,
    },
    {
      title: 'Characters',
      link: '/characters',
      image: CharacterImage,
    },
    {
      title: 'Wish Counter',
      link: '/wishes',
      image: WishImage,
    },
    {
      title: 'Calculator',
      link: '/calculator',
      image: CalculatorImage,
    },
    {
      title: 'To-Do List',
      link: '/todo',
      image: TodoImage,
    },
    {
      title: 'Database',
      link: '/database',
      image: ItemsImage,
    },
    {
      title: 'Timeline',
      link: '/timeline',
      image: TimelineImage,
    },
    {
      title: 'Settings',
      link: '/settings',
      image: SettingsImage,
    },
  ];
  return (
    <div>
      {/* Title bar */}
      <TitleBar />
      {/* Static sidebar for desktop */}
      <div className="sidebar">
        <div className="mini-sidebar">
          <div className="pt-0 p-2 pb-0 z-10 bottom-0 w-sidebar-mini pointer-events-auto">
            <Channel title="My Profile" icon={PaimonImage} link="/profile" />
          </div>
          <div className="h-auto w-12 py-[0.1rem] mx-2 rounded-sm bg-item self-center" />
          <nav className="flex-1 px-2 space-y-2 overflow-x-visible w-sidebar-mini bg-background pointer-events-auto">
            {navigation.map((item) => (
              <Channel
                key={item.title}
                title={item.title}
                icon={item.image}
                link={item.link}
              />
            ))}
          </nav>
        </div>
      </div>
      {/* Page content */}
      <div className="flex flex-col relative top-[var(--fallback-title-bar-height)] h-[calc(100vh-var(--fallback-title-bar-height))] pl-sidebar-mini z-0 bg-background">
        <main className="flex-1 overflow-y-auto bg-background-secondary text-white pt-22 items-start rounded-tl-md">
          <div className="w-full mx-auto p-4 sm:p-6 md:p-8 h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

SidebarLayout.defaultProps = {};

export default SidebarLayout;
