import React, { ReactNode } from 'react';

type AboutLayoutProps = {
  children: ReactNode;
};

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <div className="about-layout">
      {/* Your layout structure */}
      {children}
    </div>
  );
};

export default AboutLayout;
