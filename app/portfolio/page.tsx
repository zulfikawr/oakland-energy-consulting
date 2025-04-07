'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <main className='min-h-screen'>
      <section className='bg-darkest relative h-[80vh] px-8 md:px-16'>
        <div className='absolute inset-0'>
          <Image
            src='/images/electric-car-charging.png'
            alt='Electric car charging'
            fill
            className='object-cover opacity-50'
          />
        </div>
        <div className='absolute bottom-16'>
          <h1 className='text-h1 text-lightest mb-12'>Portfolio</h1>
          <p className='text-body text-light max-w-xl pr-4'>
            Explore our portfolio of remarkable projects where innovation and
            sustainability converge.
          </p>
        </div>
      </section>

      {/* Distinction Section */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        <h2 className='text-h2 text-darkest mb-12 leading-tight'>
          The distinction that sets us Apart in the industry
        </h2>

        <p className='text-body text-darker mb-12 max-w-3xl leading-relaxed'>
          In a highly competitive industry, what distinguishes a company is not
          just its offerings but its unwavering commitment to excellence and
          innovation. At Oakland C.E., we understand that to rise above the
          competition, we must constantly strive for distinction in every aspect
          of our business. Our journey in the energy sector has been defined by
          innovation and expertise.
        </p>

        <div className='mb-16 grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex items-center gap-4'>
            <div className='bg-darkest rounded-md p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48 2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48 2.83-2.83'></path>
              </svg>
            </div>
            <h3 className='text-h2 text-darkest font-medium'>Innovation</h3>
          </div>

          <div className='flex items-center gap-4'>
            <div className='bg-darkest rounded-md p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
              </svg>
            </div>
            <h3 className='text-h2 text-darkest font-medium'>Expertise</h3>
          </div>

          <div className='flex items-center gap-4'>
            <div className='bg-darkest rounded-md p-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
              </svg>
            </div>
            <h3 className='text-h2 text-darkest font-medium'>Quality</h3>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className='bg-light px-8 py-8 md:px-16'>
        <div className='mb-8 flex flex-wrap gap-4'>
          <button
            className={`text-body cursor-pointer rounded-full px-4 py-2 ${activeFilter === 'all' ? 'bg-darkest text-lightest' : 'text-darkest bg-lightest'}`}
            onClick={() => setActiveFilter('all')}
          >
            All
          </button>
          <button
            className={`text-body cursor-pointer rounded-full px-4 py-2 ${activeFilter === 'led' ? 'bg-darkest text-lightest' : 'text-darkest bg-lightest'}`}
            onClick={() => setActiveFilter('led')}
          >
            LED Lighting
          </button>
          <button
            className={`text-body cursor-pointer rounded-full px-4 py-2 ${activeFilter === 'efficiency' ? 'bg-darkest text-lightest' : 'text-darkest bg-lightest'}`}
            onClick={() => setActiveFilter('efficiency')}
          >
            Energy Efficiency
          </button>
          <button
            className={`text-body cursor-pointer rounded-full px-4 py-2 ${activeFilter === 'mobility' ? 'bg-darkest text-lightest' : 'text-darkest bg-lightest'}`}
            onClick={() => setActiveFilter('mobility')}
          >
            Electric Mobility
          </button>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {filteredProjects.map((project) => (
            <div key={project.id} className='overflow-hidden'>
              <div className='relative aspect-square overflow-hidden rounded-lg'>
                <Image
                  src={project.image || '/placeholder.png'}
                  alt={project.title}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='space-y-2 pt-4'>
                <h3 className='text-darkest text-body font-medium'>
                  {project.title}
                </h3>
                <p className='text-dark text-label'>{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-8 flex justify-center'>
          <div className='flex gap-2'>
            <button className='bg-darkest text-lightest flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm'>
              1
            </button>
            <button className='text-darkest bg-lightest flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm'>
              2
            </button>
            <button className='text-darkest bg-lightest flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm'>
              3
            </button>
            <button className='text-darkest bg-lightest flex h-8 cursor-pointer items-center justify-center rounded-full px-3 text-sm'>
              Próximo
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        <h2 className='text-h2 text-darkest mb-6'>Get in touch with us</h2>

        <p className='text-body text-darker mb-8 max-w-3xl'>
          If you're ready to explore how our expertise in energy efficiency, LED
          lighting, photovoltaic energy, and electric mobility can benefit your
          projects, don't hesitate to reach out. We're here to listen,
          collaborate, and provide you with tailored solutions that align with
          your specific needs and goals.
        </p>

        <Link
          href='/contact-us'
          className='text-darkest text-body inline-flex items-center font-medium'
        >
          Contact us <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
      </section>
    </main>
  );
}
