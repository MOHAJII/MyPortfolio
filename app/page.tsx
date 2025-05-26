import { ProfessionModal } from '@/components/profession-modal';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ProfessionModal />
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/default" />
      </noscript>
    </div>
  );
}