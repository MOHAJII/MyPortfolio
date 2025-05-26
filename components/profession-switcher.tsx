"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useProfession } from '@/hooks/use-profession';
import { useRouter } from 'next/navigation';
import { ChevronUp, ChevronDown, Briefcase, Building2, Stethoscope, GraduationCap, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function ProfessionSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { profession, setProfession } = useProfession();
  const router = useRouter();

  const professions = [
    { id: 'ecommerce', name: 'E-commerce', icon: <Briefcase className="h-4 w-4" /> },
    { id: 'real-estate', name: 'Real Estate', icon: <Building2 className="h-4 w-4" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Stethoscope className="h-4 w-4" /> },
    { id: 'education', name: 'Education', icon: <GraduationCap className="h-4 w-4" /> },
    { id: 'default', name: 'Default', icon: <Code className="h-4 w-4" /> },
  ];

  const handleSelect = (id: string) => {
    setProfession(id);
    setIsOpen(false);
    router.push(`/${id}`);
  };

  const getCurrentIcon = () => {
    const current = professions.find(p => p.id === profession);
    return current?.icon || <Code className="h-4 w-4" />;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-0 shadow-lg text-white font-semibold backdrop-blur-md scale-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1] hover:text-white"
          style={{
            minWidth: 44,
            minHeight: 44,
            fontSize: '0.95rem',
            background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
            boxShadow: isOpen ? '0 6px 24px 0 rgba(63,94,251,0.18), 0 1.5px 6px 0 rgba(252,70,107,0.10)' : '0 4px 16px 0 rgba(63,94,251,0.15)',
            filter: isOpen ? 'brightness(1.08)' : 'none',
          }}
          onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.08)'}
          onMouseOut={e => e.currentTarget.style.filter = isOpen ? 'brightness(1.08)' : 'none'}
          onFocus={e => e.currentTarget.style.filter = 'brightness(1.08)'}
          onBlur={e => e.currentTarget.style.filter = isOpen ? 'brightness(1.08)' : 'none'}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-2">
            {getCurrentIcon()}
            <span className="hidden sm:inline font-semibold">Switch View</span>
          </span>
          {isOpen ? <ChevronDown className="ml-2 h-4 w-4" /> : <ChevronUp className="ml-2 h-4 w-4" />}
        </Button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 w-44 bg-[#F9FAFB] rounded-xl shadow-xl border border-[#F3F4F6] p-2"
            >
              {professions.map((item) => (
                <Button
                  key={item.id}
                  variant={profession === item.id ? "secondary" : "ghost"}
                  className={`w-full justify-start mb-1 px-2 py-2 text-sm rounded-lg transition-all duration-150 font-medium text-[#111827] hover:bg-[#FCE7F3] hover:text-[#111827] focus:bg-[#DBEAFE] focus:text-[#111827] ${profession === item.id ? 'bg-[#DBEAFE] text-[#111827] font-bold' : ''}`}
                  style={profession === item.id ? { border: '1.5px solid #F3F4F6' } : {}}
                  onClick={() => handleSelect(item.id)}
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </span>
                </Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}