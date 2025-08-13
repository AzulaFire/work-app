'use client';
import KanjiCompoundStudy from '@/components/KanjiCompoundStudy';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function KanjiCompoundsPage() {
  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      <div className='flex justify-between items-center p-6 bg-white shadow-md'>
        <h1 className='text-2xl font-bold'>Kanji Compounds Study</h1>
        <Link href='/'>
          <Button variant='outline'>Back to Home</Button>
        </Link>
      </div>
      <KanjiCompoundStudy />
    </div>
  );
}
