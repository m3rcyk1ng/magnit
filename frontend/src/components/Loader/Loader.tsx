import { FunctionComponent } from 'react';
import { FirstLine, LoaderWrapper, SecondLine, ThirdLine } from './Loader.styles';

const Loader: FunctionComponent = () => {

  return (
    <LoaderWrapper className="loader">
      <FirstLine />
      <SecondLine />
      <ThirdLine />
    </LoaderWrapper>
  );
};

export default Loader;
