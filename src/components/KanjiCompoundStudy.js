'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import kanjiCompoundBreakdown from '@/app/data/kanjiCompoundBreakdown';

export default function KanjiCompoundStudy() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const data = shuffled
    ? [...kanjiCompoundBreakdown].sort(() => Math.random() - 0.5)
    : kanjiCompoundBreakdown;

  const current = data[index] || {
    compound: '',
    reading: '',
    meaning: '',
    kanji: [],
  };

  const nextCard = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const randomCard = () => {
    setShowAnswer(false);
    setIndex(Math.floor(Math.random() * data.length));
  };

  const toggleShuffle = () => {
    setShuffled((prev) => !prev);
    setIndex(0);
    setShowAnswer(false);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50'>
      <h2 className='text-3xl font-bold mb-6'>Kanji Compound Study</h2>

      {/* Card */}
      <div
        className='w-full max-w-4xl flex flex-col items-center justify-center p-8 border-2 border-gray-300 rounded-2xl bg-white shadow-lg cursor-pointer select-none transition-all'
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer ? (
          <div className='text-5xl font-bold text-center'>
            {current.compound}
          </div>
        ) : (
          <div className='text-center'>
            <div className='text-5xl font-bold'>{current.compound}</div>
            <div className='mt-2 text-2xl text-gray-700'>{current.reading}</div>
            <div className='mt-2 text-xl text-gray-800'>{current.meaning}</div>

            {/* Kanji breakdown */}
            {current.kanji.length > 0 && (
              <div className='mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {current.kanji.map((k, idx) => (
                  <div key={idx} className='p-4 border rounded-lg bg-gray-100'>
                    <div className='text-3xl font-bold'>{k.char}</div>
                    <div className='text-lg text-gray-700'>{k.reading}</div>
                    <div className='text-base text-gray-600'>{k.meaning}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className='flex flex-wrap gap-2 mt-6 justify-center'>
        <Button onClick={prevCard} variant='outline'>
          ◀ Prev
        </Button>
        <Button onClick={() => setShowAnswer(!showAnswer)} variant='default'>
          {showAnswer ? 'Hide' : 'Show'} Answer
        </Button>
        <Button onClick={nextCard} variant='outline'>
          Next ▶
        </Button>
        <Button onClick={randomCard} variant='secondary'>
          Random
        </Button>
        <Button onClick={toggleShuffle} variant='secondary'>
          {shuffled ? 'Unshuffle' : 'Shuffle'}
        </Button>
      </div>

      {/* Progress */}
      <div className='text-sm text-gray-500 mt-4'>
        Card {index + 1} / {data.length}
      </div>
    </div>
  );
}
