"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useProfession } from '@/hooks/use-profession';
import { Briefcase, Building2, Stethoscope, GraduationCap, Code, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProfessionModal() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();
  const { setProfession, profession } = useProfession();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!profession) {
        setOpen(true);
      } else {
        router.push(`/${profession}`);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [profession, router]);

  const handleSelect = (selected: string) => {
    setSelected(selected);
  };

  const handleContinue = () => {
    if (selected) {
      setProfession(selected);
      setOpen(false);
      router.push(`/${selected}`);
    }
  };

  const professions = [
    { name: 'default', title: 'Default', icon: <Code className="h-7 w-7" />, tagline: 'Modern & Clean', description: 'Standard developer portfolio', gradient: 'from-[#1e3c72] to-[#2a5298]' },
    { name: 'ecommerce', title: 'E-commerce', icon: <Briefcase className="h-7 w-7" />, tagline: 'Stylish & Fast', description: 'Portfolio as a product showcase', gradient: 'from-[#0f9b0f] to-[#000000]' },
    { name: 'real-estate', title: 'Real Estate', icon: <Building2 className="h-7 w-7" />, tagline: 'Elegant & Trustworthy', description: 'Portfolio as property listings', gradient: 'from-[#ff6e7f] to-[#bfe9ff]' },
    { name: 'healthcare', title: 'Healthcare', icon: <Stethoscope className="h-7 w-7" />, tagline: 'Caring & Professional', description: 'Portfolio as medical services', gradient: 'from-[#43cea2] to-[#185a9d]' },
    { name: 'education', title: 'Education', icon: <GraduationCap className="h-7 w-7" />, tagline: 'Inspiring & Smart', description: 'Portfolio as learning modules', gradient: 'from-[#614385] to-[#516395]' },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="sm:max-w-2xl w-full rounded-3xl shadow-xl border border-white/20 backdrop-blur-xl bg-white/10 p-0 flex flex-col items-center justify-center transition-all duration-300"
        style={{ minHeight: 'min(90vh, 600px)' }}
      >
        <DialogHeader className="w-full pt-10 pb-2">
          <DialogTitle className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-2 text-zinc-900 dark:text-white">Craft Your Identity</DialogTitle>
          <p className="text-center text-zinc-500 text-base md:text-lg font-medium max-w-xl mx-auto">Select the portfolio style that defines your profession.</p>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full px-6 py-8 place-items-center">
          {professions.map((item) => {
            const isSelected = selected === item.name;
            return (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.035, filter: 'brightness(0.97)' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`relative w-full max-w-xs rounded-xl cursor-pointer shadow-xl border transition-all duration-200
                  bg-gradient-to-br ${item.gradient}
                  ${isSelected ? 'border-4 border-blue-400 ring-4 ring-blue-200/30' : 'border-white/30 hover:border-blue-300 hover:ring-2 hover:ring-blue-100/40'}
                  group overflow-hidden min-h-[170px] flex flex-col justify-between p-8
                  before:content-[""] before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:shadow-[inset_0_8px_32px_0_rgba(255,255,255,0.10)]`}
                style={{ boxShadow: isSelected ? '0 0 0 6px rgba(59,130,246,0.18), 0 8px 32px 0 rgba(31, 38, 135, 0.18)' : undefined }}
                onClick={() => handleSelect(item.name)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-white/30 rounded-full p-2 text-white shadow-inner">{item.icon}</span>
                  <span className="text-xl font-semibold text-white drop-shadow tracking-wide">{item.title}</span>
                  {isSelected && (
                    <span className="ml-auto absolute top-4 right-4 bg-white/90 rounded-full p-1 shadow-lg z-10">
                      <Check className="h-5 w-5 text-blue-600" />
                    </span>
                  )}
                </div>
                <div className="mb-1">
                  <span className="text-white/90 text-base font-semibold drop-shadow block">{item.tagline}</span>
                </div>
                <div>
                  <span className="text-white/80 text-xs font-medium drop-shadow block">{item.description}</span>
                </div>
                {isSelected && (
                  <motion.div
                    layoutId="selected-glow"
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      boxShadow: '0 0 0 8px rgba(59,130,246,0.18), 0 8px 32px 0 rgba(31, 38, 135, 0.18)',
                      zIndex: 1
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
        <div className="w-full flex flex-col items-center px-6 pb-10 pt-2">
          <Button
            className={`w-full max-w-xs rounded-xl py-3 text-lg font-semibold shadow-lg transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white tracking-wide
              ${selected ? 'animate-pulse-smooth' : 'opacity-60 cursor-not-allowed'}`}
            disabled={!selected}
            onClick={handleContinue}
            style={{
              boxShadow: selected ? '0 4px 24px 0 rgba(59,130,246,0.18)' : undefined,
              transition: 'box-shadow 0.3s'
            }}
          >
            Continue with this style
          </Button>
        </div>
        <style jsx global>{`
          @media (max-width: 640px) {
            .sm\\:max-w-2xl { max-width: 98vw !important; }
            .px-6 { padding-left: 1rem !important; padding-right: 1rem !important; }
            .py-8 { padding-top: 1.5rem !important; padding-bottom: 1.5rem !important; }
            .p-8 { padding: 1.25rem !important; }
          }
          .animate-pulse-smooth {
            animation: pulse-smooth 1.5s cubic-bezier(0.4,0,0.6,1) infinite;
          }
          @keyframes pulse-smooth {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.08); }
          }
        `}</style>
      </DialogContent>
    </Dialog>
  );
}