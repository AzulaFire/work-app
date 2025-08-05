'use client';
import JobExperienceList from '@/components/JobExperienceList';

export default function Home() {
  return (
    <div className='font-sans items-center justify-items-center min-h-screen'>
      <main className='flex flex-col gap-8 items-center'>
        <JobExperienceList />
      </main>
    </div>
  );
}
