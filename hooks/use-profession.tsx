"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Profession } from '@/lib/types';

interface ProfessionContextType {
  profession: Profession | null;
  setProfession: (profession: string) => void;
}

const ProfessionContext = createContext<ProfessionContextType | undefined>(undefined);

export function ProfessionProvider({ children }: { children: React.ReactNode }) {
  const [profession, setProfessionState] = useState<Profession | null>(null);

  useEffect(() => {
    const savedProfession = Cookies.get('profession') as Profession;
    if (savedProfession) {
      setProfessionState(savedProfession);
      document.documentElement.setAttribute('data-profession', savedProfession);
    }
  }, []);

  const setProfession = (profession: string) => {
    Cookies.set('profession', profession, { expires: 30 });
    setProfessionState(profession as Profession);
    document.documentElement.setAttribute('data-profession', profession);
  };

  return (
    <ProfessionContext.Provider value={{ profession, setProfession }}>
      {children}
    </ProfessionContext.Provider>
  );
}

export function useProfession() {
  const context = useContext(ProfessionContext);
  if (context === undefined) {
    throw new Error('useProfession must be used within a ProfessionProvider');
  }
  return context;
}