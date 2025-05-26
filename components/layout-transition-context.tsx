import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LayoutTransitionContextProps {
  pendingLayout: string | null;
  setPendingLayout: (layout: string) => void;
  applyLayoutChange: () => void;
  currentLayout: string;
}

const LayoutTransitionContext = createContext<LayoutTransitionContextProps | undefined>(undefined);

export function LayoutTransitionProvider({ children }: { children: ReactNode }) {
  const [currentLayout, setCurrentLayout] = useState('default');
  const [pendingLayout, setPendingLayout] = useState<string | null>(null);

  const applyLayoutChange = () => {
    if (pendingLayout) {
      setCurrentLayout(pendingLayout);
      setPendingLayout(null);
    }
  };

  return (
    <LayoutTransitionContext.Provider value={{ pendingLayout, setPendingLayout, applyLayoutChange, currentLayout }}>
      {children}
    </LayoutTransitionContext.Provider>
  );
}

export function useLayoutTransition() {
  const context = useContext(LayoutTransitionContext);
  if (!context) {
    throw new Error('useLayoutTransition must be used within a LayoutTransitionProvider');
  }
  return context;
}
