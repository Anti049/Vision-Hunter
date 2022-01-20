// React imports
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
// Component imports
import WindowMetadata from '@components/utilities/WindowMetadata';

// Prop definitions
type Props = Record<string, never>;
// Type definitions
type Messages = {
  [key: string]: {
    message: string;
    subtitle: string;
  };
};

const Custom404Page: FC<Props> = () => {
  const location = useLocation();
  const errorMessages: Messages = {
    404: {
      message: `Page "${location.pathname}"  Not Found`,
      subtitle: 'Please verify the URL',
    },
    500: {
      message: 'Internal Server Error',
      subtitle: 'Please try again later',
    },
    default: {
      message: 'Unknown Error Occurred',
      subtitle: "We're not sure what happened",
    },
  };
  const getErrorMessage = (errorCode: any) => {
    if (errorMessages[errorCode]) return errorMessages[errorCode];
    return errorMessages.default;
  };
  const statusCode = 404;
  const errorMessage = getErrorMessage(statusCode);
  console.log(statusCode);

  return (
    <div className="w-full flex h-full">
      <WindowMetadata
        title={`Error ${statusCode}`}
        description={`${statusCode} error`}
      />
      <main className="m-auto">
        <p className="text-9xl text-center text-primary mb-10">{statusCode}</p>
        <p className="text-6xl text-center">{errorMessage.message}</p>
        <p className="text-3xl text-center mt-10">{errorMessage.subtitle}</p>
      </main>
    </div>
  );
};

Custom404Page.defaultProps = {};

export default Custom404Page;
