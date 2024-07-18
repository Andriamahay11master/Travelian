// CurrentHashContext.tsx
"use client"
import React, { createContext, useState, ReactNode } from 'react';

export interface CurrentHashContextProps {
  currentHash: string;
  setCurrentHash: (hash: string) => void;
}

const CurrentHashContext = createContext<CurrentHashContextProps | undefined>(undefined);

export const CurrentHashProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentHash, setCurrentHash] = useState("/#home");

  return (
    <CurrentHashContext.Provider value={{ currentHash, setCurrentHash }}>
      {children}
    </CurrentHashContext.Provider>
  );
};

export default CurrentHashContext;
