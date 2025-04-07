'use client';

import type React from 'react';

import Image from 'next/image';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, consent: e.target.checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className='min-h-screen'>
      <section className='bg-light relative h-[80vh] px-8 md:px-16'>
        <div className='absolute bottom-16 max-w-5xl'>
          <h1 className='text-h1 text-darkest mb-12'>Contact us</h1>
          <p className='text-body text-dark max-w-xl'>
            Our team is here to assist you on your journey towards a sustainable
            and efficient energy future.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        <div className='grid gap-16 md:grid-cols-2'>
          <div>
            <h2 className='text-h2 text-darkest mb-8'>Location</h2>

            <p className='text-body text-darker mb-24'>
              Avenida Maria Lopes, Nº2
              <br />
              8400-401 Vila Real, Portugal
            </p>

            <h2 className='text-h2 text-darkest mb-8'>Open hours</h2>

            <p className='text-body text-darker'>
              Weekdays - 9:00am to 6:00pm
              <br />
              Weekends - Closed
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-8'>Form</h2>

            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                    className='text-body focus:ring-darkest w-full rounded-md border border-[#e5e5e5] p-3 focus:ring-1 focus:outline-none'
                    required
                  />
                </div>
                <div>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                    className='text-body focus:ring-darkest w-full rounded-md border border-[#e5e5e5] p-3 focus:ring-1 focus:outline-none'
                    required
                  />
                </div>
              </div>

              <div className='grid gap-6 md:grid-cols-2'>
                <div>
                  <input
                    type='tel'
                    name='phone'
                    placeholder='Phone number'
                    value={formData.phone}
                    onChange={handleChange}
                    className='text-body focus:ring-darkest w-full rounded-md border border-[#e5e5e5] p-3 focus:ring-1 focus:outline-none'
                  />
                </div>
                <div>
                  <input
                    type='text'
                    name='company'
                    placeholder='Company (optional)'
                    value={formData.company}
                    onChange={handleChange}
                    className='text-body focus:ring-darkest w-full rounded-md border border-[#e5e5e5] p-3 focus:ring-1 focus:outline-none'
                  />
                </div>
              </div>

              <div>
                <textarea
                  name='message'
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className='text-body focus:ring-darkest w-full rounded-md border border-[#e5e5e5] p-3 focus:ring-1 focus:outline-none'
                  required
                ></textarea>
              </div>

              <div className='flex items-start gap-3'>
                <input
                  type='checkbox'
                  id='consent'
                  name='consent'
                  checked={formData.consent}
                  onChange={handleCheckboxChange}
                  className='mt-1'
                  required
                />
                <label htmlFor='consent' className='text-darker text-sm'>
                  I consent to Oakland C.E. processing my data for contact
                  purposes.
                </label>
              </div>

              <div>
                <button
                  type='submit'
                  className='bg-darkest text-lightest text-body cursor-pointer rounded-full px-6 py-3 font-medium'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map and Building Images */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        <div className='hidden h-[400px] gap-6 md:flex'>
          <div className='relative w-2/3 overflow-hidden rounded-md'>
            <Image
              src='/images/map-location.png'
              alt='Map location'
              fill
              className='object-cover'
            />
          </div>

          <div className='relative w-1/3 overflow-hidden rounded-md'>
            <Image
              src='/images/oakland-building.png'
              alt='Oakland building'
              fill
              className='object-cover'
            />
          </div>
        </div>

        <div className='grid gap-6 md:hidden'>
          <div className='relative h-[300px] overflow-hidden rounded-md'>
            <Image
              src='/images/map-location.png'
              alt='Map location'
              fill
              className='object-cover'
            />
          </div>
          <div className='relative h-[300px] overflow-hidden rounded-md'>
            <Image
              src='/images/oakland-building.png'
              alt='Oakland building'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
