import React from "react";

const Wrapper: React.FC = ({ children }) => (
  <div className="container mx-auto px-4 min-h-screen flex flex-col">
    <main className="flex flex-col justify-center items-center w-full flex-auto">
      {children}
    </main>
    <footer className="text-center text-xs py-3">
      Made with CRA, hosted on GitHub Pages
    </footer>
  </div>
);

export default Wrapper;
