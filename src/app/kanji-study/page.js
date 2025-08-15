'use client';
import KanjiStudy from '@/components/KanjiStudy';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function KanjiStudyPage() {
  return (
    <div className='min-h-screen bg-gray-50 font-sans'>
      <div className='flex justify-between items-center p-6 bg-red-800 text-white shadow-md sticky top-0'>
        <h1 className='text-2xl font-bold'>Kanji Study</h1>
        <Link href='/'>
          <Button variant='outline' className={'bg-white text-red-800'}>
            Back to Home
          </Button>
        </Link>
      </div>
      <KanjiStudy />
    </div>
  );
}
