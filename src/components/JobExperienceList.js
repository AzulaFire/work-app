import React, { useMemo, useState } from 'react';
import { differenceInMonths, parse } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import jobs from '@/app/data/jobs';

const formatDuration = (startDateStr, endDateStr) => {
  const start = parse(startDateStr, 'yyyy-MM', new Date());
  const end = parse(endDateStr, 'yyyy-MM', new Date());
  const months = differenceInMonths(end, start);
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;
  let result = '';
  if (years > 0) result += `${years} year${years > 1 ? 's' : ''}`;
  if (years > 0 && remainingMonths > 0) result += ' and ';
  if (remainingMonths > 0)
    result += `${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  return result;
};

export default function JobExperienceList() {
  const [search, setSearch] = useState('');
  const [filterTag, setFilterTag] = useState(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchLower = search.toLowerCase();
      const combined = [
        job.title,
        job.location,
        ...(job.technologies || []),
        ...(job.osAndDatabase || []),
      ]
        .join(' ')
        .toLowerCase();
      const matchesSearch = combined.includes(searchLower);
      const matchesTag = filterTag
        ? job.technologies?.includes(filterTag) ||
          job.osAndDatabase?.includes(filterTag)
        : true;
      return matchesSearch && matchesTag;
    });
  }, [search, filterTag]);

  const allTags = useMemo(() => {
    const tags = new Set();
    jobs.forEach((job) => {
      job.technologies?.forEach((t) => tags.add(t));
      job.osAndDatabase?.forEach((o) => tags.add(o));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <div className='p-6 max-w-5xl mx-auto'>
      <h1 className='text-3xl font-bold mb-6 capitalize'>Work Experience</h1>

      <Input
        placeholder='Search by title, location, tech...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='mb-4'
      />

      <div className='flex flex-wrap gap-2 mb-6'>
        {allTags.map((tag) => (
          <Badge
            key={tag}
            onClick={() => setFilterTag(filterTag === tag ? null : tag)}
            className={`cursor-pointer ${
              filterTag === tag ? 'bg-blue-600 text-white' : ''
            }`}
          >
            {tag}
          </Badge>
        ))}
      </div>

      <div className='grid gap-6'>
        {filteredJobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className='p-6'>
                <h2 className='text-xl font-semibold pb-4'>{job.title}</h2>
                <p className='text-sm text-gray-500'>{job.location}</p>
                <p className='text-sm text-gray-500'>
                  {job.startDate} — {job.endDate} (
                  {formatDuration(job.startDate, job.endDate)})
                </p>

                <ul className='mt-4 list-disc list-inside space-y-1 text-sm text-gray-700'>
                  {job.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className='mt-4 flex flex-wrap gap-2'>
                  {(job.technologies || []).map((tech, idx) => (
                    <Badge key={idx} variant='outline'>
                      {tech}
                    </Badge>
                  ))}
                  {(job.osAndDatabase || []).map((os, idx) => (
                    <Badge key={idx} variant='outline'>
                      {os}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
