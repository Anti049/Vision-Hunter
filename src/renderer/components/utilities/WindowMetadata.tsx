// React imports
import { FC } from 'react';

// Prop definitions
interface Props {
  title?: string;
  description?: string;
}

const WindowMetadata: FC<Props> = ({ title, description }) => {
  return (
    <div>
      <title>{`${title} | Vision Hunter`}</title>
      <meta name="description" content={`Vision Hunter: ${description}`} />
    </div>
  );
};

WindowMetadata.defaultProps = {
  title: 'Vision Hunter',
  description: 'Vision Hunter',
};

export default WindowMetadata;
