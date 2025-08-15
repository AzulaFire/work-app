'use client';
import Link from 'next/link';
import JobExperienceList from '@/components/JobExperienceList';

export default function Home() {
  return (
    <div className='font-sans items-center justify-items-center min-h-screen p-6'>
      <main className='flex flex-col gap-8 items-center'>
        <div className='flex justify-between items-center p-6 bg-red-800 text-white shadow-md'>
          <Link href='/kanji-study'>
            <button className='px-4 py-3 mr-4 font-bold bg-white text-red-800 shadow-md'>
              Go to Kanji Study
            </button>
          </Link>
          <Link href='/kanji-compounds'>
            <button className='px-4 py-3 font-bold bg-white text-red-800 shadow-md'>
              Go to Kanji Compound Study
            </button>
          </Link>
        </div>

        <JobExperienceList />
      </main>
    </div>
  );
}
