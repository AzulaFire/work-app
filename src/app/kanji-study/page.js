'use client';
import KanjiStudy from '@/components/KanjiStudy';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function KanjiStudyPage() {
  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      <div className='flex justify-between items-center p-6 bg-white shadow-md'>
        <h1 className='text-2xl font-bold'>Kanji Study</h1>
        <Link href='/'>
          <Button variant='outline'>Back to Home</Button>
        </Link>
      </div>
      <KanjiStudy />
    </div>
  );
}
