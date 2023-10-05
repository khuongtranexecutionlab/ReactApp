import DemoQuery from './query';
import DemoSWR from './swr';

interface IDemo extends React.FC {
  SWR: typeof DemoSWR;
  QUERY: typeof DemoQuery;
}

const Demo: IDemo = () => null;

Demo.QUERY = DemoQuery;
Demo.SWR = DemoSWR;

export default Demo;
