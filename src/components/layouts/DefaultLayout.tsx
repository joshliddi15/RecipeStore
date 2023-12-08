import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';

type DefaultLayoutProps = {
  children: ReactNode;
  isLoggedIn?: boolean;
};

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children}) => {
  return (
    <div className="layout min-h-screen bg-sandstone">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
