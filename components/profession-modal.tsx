"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useProfession } from '@/hooks/use-profession';
import { Briefcase, Building2, Stethoscope, GraduationCap, Code, Check } from 'lucide-react';

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
    { name: 'default', title: 'Default', icon: <Code className="h-6 w-6" />, tagline: 'Modern & Clean', description: 'Standard developer portfolio' },
    { name: 'ecommerce', title: 'E-commerce', icon: <Briefcase className="h-6 w-6" />, tagline: 'Stylish & Fast', description: 'Portfolio as a product showcase' },
    { name: 'real-estate', title: 'Real Estate', icon: <Building2 className="h-6 w-6" />, tagline: 'Elegant & Trustworthy', description: 'Portfolio as property listings' },
    { name: 'healthcare', title: 'Healthcare', icon: <Stethoscope className="h-6 w-6" />, tagline: 'Caring & Professional', description: 'Portfolio as medical services' },
    { name: 'education', title: 'Education', icon: <GraduationCap className="h-6 w-6" />, tagline: 'Inspiring & Smart', description: 'Portfolio as learning modules' },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg w-full rounded-xl border bg-white dark:bg-zinc-900 p-0 flex flex-col items-center justify-center">
        <DialogHeader className="w-full pt-8 pb-2">
          <DialogTitle className="text-2xl md:text-3xl font-semibold text-center tracking-wide mb-2 text-zinc-900 dark:text-white">Select Your Profession</DialogTitle>
          <p className="text-center text-zinc-500 text-base md:text-lg font-normal max-w-xl mx-auto">Choose the portfolio style that fits your field.</p>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-6 py-6">
          {professions.map((item) => {
            const isSelected = selected === item.name;
            return (
              <button
                key={item.name}
                className={`flex items-center w-full max-w-xs rounded-lg border px-4 py-3 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-400 gap-3 bg-zinc-50 dark:bg-zinc-800 hover:border-blue-400 ${isSelected ? 'border-blue-600 ring-2 ring-blue-200' : 'border-zinc-200 dark:border-zinc-700'}`}
                style={{ fontWeight: isSelected ? 600 : 500 }}
                onClick={() => handleSelect(item.name)}
                type="button"
              >
                <span className="bg-zinc-200 dark:bg-zinc-700 rounded-full p-2 text-zinc-700 dark:text-white">{item.icon}</span>
                <span className="text-base text-zinc-900 dark:text-white">{item.title}</span>
                <span className="ml-auto text-xs text-zinc-500 font-normal">{item.tagline}</span>
                {isSelected && (
                  <span className="ml-2 text-blue-600"><Check className="h-4 w-4" /></span>
                )}
              </button>
            );
          })}
        </div>
        <div className="w-full flex flex-col items-center px-6 pb-8 pt-2">
          <Button
            className={`w-full max-w-xs rounded-lg py-2 text-base font-semibold transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white ${selected ? '' : 'opacity-60 cursor-not-allowed'}`}
            disabled={!selected}
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}