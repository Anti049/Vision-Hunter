// React imports
import React from 'react';
import Icon from '@mdi/react';
// Asset imports
import icon from '@assets/images/icon.png';
import {
  mdiWindowMinimize,
  mdiWindowMaximize,
  mdiWindowClose,
  mdiWindowRestore,
} from '@mdi/js';

// Prop definitions
type Props = {
  title: string;
  maximized: boolean;
};

class TitleBar extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: document.title,
      maximized: false,
    };
  }

  componentDidMount() {
    const titlebar = document.getElementById('app-titlebar');
    titlebar?.addEventListener('dblclick', () => {
      window.electron.send('maximizeRestoreApp');
    });
    const minimizeButton = document.getElementById('btn-minimize');
    minimizeButton?.addEventListener('click', () => {
      window.electron.send('minimizeApp');
    });
    const maximizeButton = document.getElementById('btn-maximize');
    maximizeButton?.addEventListener('click', () => {
      window.electron.send('maximizeRestoreApp');
    });
    const closeButton = document.getElementById('btn-close');
    closeButton?.addEventListener('click', () => {
      window.electron.send('closeApp');
    });
    window.electron.on('isMaximized', () => this.setState({ maximized: true }));
    window.electron.on('isRestored', () =>
      this.setState({
        maximized: false,
      })
    );
    window.electron.on('changeTitle', (newTitle: string) => {
      this.setState({ title: newTitle });
    });
  }

  render() {
    const { title, maximized } = this.state;
    return (
      <div
        id="app-titlebar"
        className="app-titlebar fixed flex items-center bg-titlebar pt-0"
      >
        <img
          className="app-favicon flex-none pl-5 h-2/3"
          src={icon}
          alt="App Icon"
        />
        <div className="app-title pl-6 w-full text-center">
          <span className="text-white font-title">{title}</span>
        </div>
        <div className="app-titlebuttons grid grid-cols-3 w-36 h-full text-white">
          <button
            id="btn-minimize"
            type="button"
            className="hover:bg-navigation-hover items-center"
          >
            <Icon
              path={mdiWindowMinimize}
              className="w-[90%] h-[90%] p-2 m-auto"
            />
          </button>
          <button
            id="btn-maximize"
            type="button"
            className="hover:bg-navigation-hover items-center"
          >
            <Icon
              path={maximized ? mdiWindowRestore : mdiWindowMaximize}
              className="w-[90%] h-[90%] p-2 m-auto"
            />
          </button>
          <button
            id="btn-close"
            type="button"
            className="hover:bg-red items-center content-center"
          >
            <Icon
              path={mdiWindowClose}
              className="w-[90%] h-[90%] p-2 m-auto"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default TitleBar;
