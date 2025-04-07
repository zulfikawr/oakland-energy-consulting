'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Services() {
  const [openService, setOpenService] = useState<string | null>(null);

  const toggleService = (service: string) => {
    if (openService === service) {
      setOpenService(null);
    } else {
      setOpenService(service);
    }
  };

  return (
    <main className='min-h-screen'>
      <section className='bg-darkest relative h-[80vh] px-8 md:px-16'>
        <div className='absolute bottom-16 max-w-5xl'>
          <h1 className='text-h1 text-lightest mb-12'>Services</h1>
          <p className='text-body text-light max-w-xl'>
            Discover our comprehensive range of services tailored to meet your
            energy efficiency, LED lighting, photovoltaic energy, and much more.
          </p>
        </div>
      </section>

      {/* Services Accordion */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        {/* Illumination */}
        <div className='border-t border-[#e5e5e5] py-12'>
          <button
            className='group flex w-full cursor-pointer items-center justify-between text-left'
            onClick={() => toggleService('illumination')}
          >
            <h2 className='text-accordion-title text-darkest leading-tight font-light transition-opacity group-hover:opacity-80'>
              Illumination
            </h2>
            <ArrowDown
              className={`text-dark h-10 w-10 transition-all duration-300 ease-in-out ${
                openService === 'illumination' ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openService === 'illumination'
                ? 'mt-8 max-h-[1000px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className='grid gap-8 pt-2 md:grid-cols-2'>
              <p className='text-body text-darker'>
                Our illumination services provide cutting-edge LED lighting
                solutions that reduce energy consumption while enhancing visual
                comfort and aesthetics. We design custom lighting systems for
                commercial, industrial, and residential spaces that optimize
                light quality and distribution.
              </p>
              <p className='text-body text-darker'>
                We offer comprehensive lighting audits, retrofitting of existing
                systems, smart lighting controls, and ongoing maintenance to
                ensure optimal performance and longevity. Our solutions not only
                reduce operational costs but also contribute to sustainability
                goals by minimizing carbon footprint.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainable Energy */}
        <div className='border-t border-[#e5e5e5] py-12'>
          <button
            className='group flex w-full cursor-pointer items-center justify-between text-left'
            onClick={() => toggleService('sustainable')}
          >
            <h2 className='text-accordion-title text-darkest leading-tight font-light transition-opacity group-hover:opacity-80'>
              Sustainable Energy
            </h2>
            <ArrowDown
              className={`text-dark h-10 w-10 transition-all duration-300 ease-in-out ${
                openService === 'sustainable' ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openService === 'sustainable'
                ? 'mt-8 max-h-[1000px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className='grid gap-8 pt-2 md:grid-cols-2'>
              <p className='text-body text-darker'>
                Our sustainable energy services encompass a wide range of
                renewable energy solutions, including solar photovoltaic
                systems, wind energy, and energy storage technologies. We
                provide end-to-end services from feasibility studies and system
                design to installation and maintenance.
              </p>
              <p className='text-body text-darker'>
                We help businesses and organizations transition to clean energy
                sources, reduce dependence on fossil fuels, and achieve
                significant cost savings over time. Our team of experts ensures
                that each solution is tailored to the specific needs and
                constraints of the project, maximizing return on investment
                while minimizing environmental impact.
              </p>
            </div>
          </div>
        </div>

        {/* Electric Mobility */}
        <div className='border-t border-[#e5e5e5] py-12'>
          <button
            className='group flex w-full cursor-pointer items-center justify-between text-left'
            onClick={() => toggleService('mobility')}
          >
            <h2 className='text-accordion-title text-darkest leading-tight font-light transition-opacity group-hover:opacity-80'>
              Electric Mobility
            </h2>
            <ArrowDown
              className={`text-dark h-10 w-10 transition-all duration-300 ease-in-out ${
                openService === 'mobility' ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openService === 'mobility'
                ? 'mt-8 max-h-[1000px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className='grid gap-8 pt-2 md:grid-cols-2'>
              <p className='text-body text-darker'>
                Our electric mobility services support the transition to
                sustainable transportation through comprehensive electric
                vehicle (EV) charging infrastructure solutions. We design,
                install, and maintain EV charging stations for commercial
                properties, workplaces, multi-unit dwellings, and public spaces.
              </p>
              <p className='text-body text-darker'>
                We provide expert guidance on charging technology selection,
                power management, and integration with existing electrical
                systems. Our solutions include smart charging capabilities, load
                balancing, and remote monitoring to ensure efficient operation
                and optimal user experience while supporting the growing
                adoption of electric vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* Consulting */}
        <div className='border-t border-[#e5e5e5] py-12'>
          <button
            className='group flex w-full cursor-pointer items-center justify-between text-left'
            onClick={() => toggleService('consulting')}
          >
            <h2 className='text-accordion-title text-darkest leading-tight font-light transition-opacity group-hover:opacity-80'>
              Consulting
            </h2>
            <ArrowDown
              className={`text-dark h-10 w-10 transition-all duration-300 ease-in-out ${
                openService === 'consulting' ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openService === 'consulting'
                ? 'mt-8 max-h-[1000px] opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className='grid gap-8 pt-2 md:grid-cols-2'>
              <p className='text-body text-darker'>
                Our consulting services provide expert guidance on energy
                efficiency, sustainability strategies, and renewable energy
                integration. We conduct comprehensive energy audits, identify
                opportunities for improvement, and develop customized roadmaps
                for achieving energy and sustainability goals.
              </p>
              <p className='text-body text-darker'>
                Our team of experienced consultants offers specialized expertise
                in regulatory compliance, green building certification, carbon
                footprint reduction, and sustainable business practices. We work
                closely with clients to develop practical, cost-effective
                solutions that align with their business objectives while
                advancing environmental stewardship.
              </p>
            </div>
          </div>
        </div>
        <div className='border-t border-[#e5e5e5]'></div>
      </section>

      {/* Project Showcase */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        <div className='flex flex-col items-end gap-8 text-right md:flex-row'>
          <div className='order-2 md:order-1 md:w-1/3'>
            <div className='text-label text-dark mb-1'>
              Sustainable energy consulting
            </div>
            <div className='text-label text-dark'>Oakland, 2023</div>
          </div>

          <div className='relative order-1 w-full md:order-2 md:w-2/3'>
            <Image
              src='/images/wind-turbines-on-a-hillside.png'
              alt='Wind turbines on a hillside'
              width={800}
              height={500}
              className='h-auto max-h-[550px] w-full rounded-md'
            />
          </div>
        </div>

        <div className='mt-24 max-w-3xl'>
          <h2 className='text-h2 text-darkest mb-12 leading-tight'>
            Proudly helping businesses
          </h2>

          <p className='text-body text-darker mb-12'>
            Explore our portfolio of remarkable projects where innovation and
            sustainability converge. Discover how we've transformed energy
            landscapes and elevated standards in the industry.
          </p>

          <Link
            href='/portfolio'
            className='text-body text-darkest inline-flex items-center font-medium hover:underline'
          >
            View our Portfolio
            <ArrowRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </section>
    </main>
  );
}
