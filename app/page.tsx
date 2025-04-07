import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { expertise } from '@/data';

export default function Home() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-screen w-full'>
        {/* Mobile Background Image */}
        <div className='absolute inset-0 md:hidden'>
          <Image
            src='/images/street-light-against-cloudy-sky.png'
            alt='Street light against cloudy sky'
            fill
            priority
            className='object-cover'
          />
          {/* Dark overlay for text contrast */}
          <div className='bg-darkest/60 absolute inset-0'></div>
        </div>

        {/* Content Container */}
        <div className='relative flex h-full flex-col md:flex-row'>
          {/* Text Content - Bottom on desktop, centered on mobile */}
          <div className='text-lightest md:bg-darkest z-10 flex flex-1 items-end px-6 pb-16 md:w-1/2 md:px-16'>
            <div className='w-full max-w-xl'>
              <h1 className='text-h1 mb-8 leading-tight'>
                <span className='block'>Redefining</span>
                <span className='block'>Energy</span>
              </h1>
              <p className='text-body mb-10'>
                As market leaders for 20 years, we are experts in energy
                efficiency, providing tailored, concrete solutions to meet your
                needs.
              </p>
              <Link
                href='/portfolio'
                className='bg-lightest text-darkest text-body inline-flex w-fit items-center justify-center rounded-full px-6 py-2 transition-opacity hover:opacity-90'
              >
                View our Portfolio
              </Link>
            </div>
          </div>

          {/* Desktop Image - Right Side */}
          <div className='hidden md:block md:w-1/2'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/hero.png'
                alt='Street light against cloudy sky'
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className='flex min-h-screen flex-col justify-center px-8 pt-28 pb-20 md:px-16'>
        <h2 className='text-h2 text-darkest mb-10'>Areas of Expertise</h2>

        <p className='text-body text-darker mb-12 max-w-2xl'>
          Whether for small or large-scale projects, we are committed to
          delivering cutting-edge results, contributing to a more sustainable
          and innovative energy future.
        </p>

        {/* Mobile horizontal scroll container */}
        <div className='relative'>
          <div className='no-scrollbar flex gap-4 overflow-x-auto pb-4 sm:hidden'>
            {expertise.map((item, index) => (
              <div
                key={index}
                className='flex-shrink-0'
                style={{ width: 'calc(100vw - 8rem)' }}
              >
                <div className='group relative aspect-[3/4] overflow-hidden rounded-md'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover'
                  />
                  <div className='bg-darkest/10 absolute inset-0 flex items-end p-4'>
                    <span className='text-lightest text-body'>
                      {item.title}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop grid */}
          <div className='hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4'>
            {expertise.map((item, index) => (
              <div
                key={index}
                className='group relative aspect-[3/4] overflow-hidden rounded-md'
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover'
                />
                <div className='bg-darkest/10 absolute inset-0 flex items-end p-4'>
                  <span className='text-lightest text-body'>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='my-24 ml-auto max-w-2xl'>
          <p className='text-body text-darker'>
            Leading the market for two decades, we have been experts in energy
            efficiency. With an unwavering commitment to innovation, we offer
            tailored solutions for projects of all sizes. From LED lighting to
            photovoltaic energy and electric mobility, our dedicated team works
            tirelessly to deliver cutting-edge solutions that drive
            sustainability and energy efficiency.
          </p>
        </div>
      </section>

      {/* Knowledge Section */}
      <section className='bg-light xl:h[90vh] flex h-[70vh] flex-col md:h-[80vh] md:flex-row'>
        <div className='relative w-full overflow-visible px-8 md:px-16 lg:w-1/3'>
          <div className='bg-light relative -mt-8 -mt-16 h-[50vh] rounded-md shadow-lg md:-mt-24 md:h-[60vh] xl:h-[70vh]'>
            <Image
              src='/images/modern-building-architecture.png'
              alt='Modern building architecture'
              fill
              className='rounded-md object-cover'
              style={{ objectPosition: 'center top' }}
            />
          </div>
        </div>

        <div className='flex h-full w-full flex-col justify-center px-8 md:px-16 lg:w-2/3'>
          <h2 className='text-h2 text-darkest mt-8 mb-6 leading-tight'>
            Deep knowledge in the field
          </h2>
          <p className='text-body text-darker mb-8'>
            Our extensive experience and expertise in the energy sector have
            positioned us as leaders in the industry. With two decades of market
            leadership, we have honed our knowledge in energy efficiency, LED
            lighting, photovoltaic energy, and electric mobility to a level that
            sets us apart.
          </p>
          <Link
            href='/about-us'
            className='text-body text-darkest inline-flex items-center font-medium hover:underline'
          >
            Learn more <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className='flex min-h-screen flex-col justify-center px-8 pt-20 md:px-16'>
        <h2 className='text-h2 text-darkest mb-8'>Get in touch with us</h2>

        <p className='text-body text-darker mb-8 max-w-3xl'>
          If you're ready to explore how our expertise in energy efficiency, LED
          lighting, photovoltaic energy, and electric mobility can benefit your
          projects, don't hesitate to reach out. We're here to listen,
          collaborate, and provide you with tailored solutions that align with
          your specific needs and goals.
        </p>

        <Link
          href='/contact-us'
          className='text-body text-darkest inline-flex items-center font-medium hover:underline'
        >
          Contact us <ArrowRight className='ml-2 h-4 w-4' />
        </Link>
      </section>
    </main>
  );
}
