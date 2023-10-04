import Container from './container';

export interface LayoutComponent extends React.FC {
  Container: typeof Container;
}

const Layout: LayoutComponent = () => null;

Layout.Container = Container;

export default Layout;
