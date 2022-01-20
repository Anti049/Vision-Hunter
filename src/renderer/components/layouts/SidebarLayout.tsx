/* eslint-disable import/no-dynamic-require */
// React imports
import { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
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
import TitleBar from '@components/utilities/TitleBar';

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
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        mergeClassNames(
          isActive
            ? 'bg-navigation'
            : 'opacity-60 hover:opacity-100 hover:bg-navigation-hover',
          'sidebar-icon has-tooltip shadow-lg'
        )
      }
    >
      <img src={icon} alt={icon} className="object-contain w-full h-full" />
      <span className="tooltip z-20 left-16 text-right px-4 py-2 rounded-lg bg-background">
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
      <div className="flex flex-1 flex-col overflow-y-auto overflow-x-visible fixed top-[40px] left-0 h-[calc(100vh-40px)] w-full m-0 z-10 text-white pointer-events-none">
        <nav className="flex-1 px-2 space-y-2 overflow-x-visible w-16 bg-background pointer-events-auto">
          {navigation.map((item) => (
            <SidebarIcon
              key={item.title}
              title={item.title}
              icon={item.image}
              link={item.link}
            />
          ))}
        </nav>
        <div className="p-2 pb-1 z-10 bottom-0 w-16 pointer-events-auto">
          <SidebarIcon title="My Profile" icon={PaimonImage} link="/profile" />
        </div>
      </div>
      {/* Page content */}
      <div className="flex flex-col relative top-[40px] h-[calc(100vh-40px)] pl-16 z-0 bg-background">
        <main className="flex-1 overflow-y-auto bg-background-secondary text-white pt-22 items-start rounded-tl-[2rem]">
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
