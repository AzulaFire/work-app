'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import kanjiStudyData from '@/app/data/kanjiStudyData';

export default function KanjiStudy() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffled, setShuffled] = useState(false);

  const data = shuffled
    ? [...kanjiStudyData].sort(() => Math.random() - 0.5)
    : kanjiStudyData;

  const current = data[index] || { word: '', reading: '', meaning: '' };

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
    <div className='flex flex-col items-center justify-between min-h-screen p-6 bg-gray-100'>
      <h2 className='text-3xl md:text-4xl font-bold mb-4'>Kanji Study</h2>

      {/* Card */}
      <div
        className='flex-1 w-full max-w-4xl flex flex-col items-center justify-center border-2 border-gray-300 rounded-2xl bg-white p-6 cursor-pointer select-none shadow-lg'
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer ? (
          <span className='text-6xl md:text-8xl font-bold'>{current.word}</span>
        ) : (
          <div className='text-center space-y-4'>
            <div className='text-6xl md:text-8xl font-bold'>{current.word}</div>
            <div className='text-3xl md:text-4xl text-gray-600'>
              {current.reading}
            </div>
            <div className='text-2xl md:text-3xl text-gray-800'>
              {current.meaning}
            </div>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className='flex flex-wrap justify-center gap-2 mt-4'>
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
