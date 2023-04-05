import { RevolvingDot } from 'react-loader-spinner';

const DotSpinner = () => (
  <RevolvingDot
    height="100"
    width="100"
    color="#61dafb"
    ariaLabel="revolving-dot-loading"
    wrapperStyle={{ justifyContent: 'center' }}
    visible={true}
  />
);

export default DotSpinner;
