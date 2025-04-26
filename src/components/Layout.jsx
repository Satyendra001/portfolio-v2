import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="fade-in">{children}</div>
      </main>
    </div>
  );
};

export default Layout;