// React imports
import { FC } from 'react';
// Component imports
import WindowMetadata from '@components/utilities/WindowMetadata';
// Asset imports
import PaimonImage from '@assets/images/paimon.png';

// Prop definitions
type Props = Record<string, never>;

const HomePage: FC<Props> = () => {
  return (
    <div>
      <WindowMetadata title="Home" />
    </div>
  );
};

HomePage.defaultProps = {};

export default HomePage;
