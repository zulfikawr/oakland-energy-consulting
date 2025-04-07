import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className='min-h-screen'>
      <section className='bg-light relative h-[80vh] px-8 md:px-16'>
        <div className='absolute bottom-16 max-w-5xl'>
          <h1 className='text-h1 text-darkest mb-12'>About us</h1>
          <p className='text-body text-darker max-w-xl'>
            Learn more about Oakland C.E. and our commitment to excellence,
            innovation, and sustainability.
          </p>
        </div>
      </section>

      <section className='px-8 py-16 md:px-16 md:py-24'>
        <h2 className='text-h2 text-darker mb-6 leading-tight'>Innovation.</h2>
        <h2 className='text-h2 text-darker mb-12 leading-tight'>
          Guiding our journey from the start.
        </h2>

        <div className='flex flex-col items-end gap-8 text-right md:flex-row'>
          <div className='order-2 md:order-1 md:w-1/3'>
            <div className='text-label text-dark mb-1'>
              Executive Board members
            </div>
            <div className='text-label text-dark'>Oakland, 2023</div>
          </div>

          <div className='relative order-1 w-full md:order-2 md:w-2/3'>
            <Image
              src='/images/executive-board-members-meeting.png'
              alt='Executive Board members meeting'
              width={800}
              height={500}
              className='h-auto max-h-[550px] w-full rounded-md'
            />
          </div>
        </div>

        <div className='mt-16 flex max-w-3xl flex-col gap-8'>
          <div>
            <p className='text-body text-darker'>
              Innovation has been at the heart of our journey right from the
              beginning. At Oakland C.E., we believe that staying at the
              forefront of technology and sustainable practices is essential.
              We've consistently sought innovative solutions in energy
              efficiency, LED lighting, photovoltaic energy, and electric
              mobility to shape a brighter and greener future.
            </p>
          </div>

          <div>
            <p className='text-body text-darker'>
              Our commitment to innovation drives us to continually explore new
              avenues, refine our processes, and deliver pioneering results for
              our clients. Join us in embracing innovation as we chart a course
              towards a more sustainable and efficient energy landscape.
            </p>
          </div>
        </div>
      </section>

      <section className='px-8 py-16 md:px-16 md:py-24'>
        <div className='relative h-[400px] w-full md:h-[500px]'>
          <Image
            src='/images/trees-viewed-from-below.png'
            alt='Trees viewed from below'
            fill
            className='rounded-md object-cover'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <h2 className='text-h2 text-lightest px-2 text-center leading-tight sm:px-0'>
              Building the future of energy evolution
            </h2>
          </div>
        </div>

        <div className='flex justify-end px-8 py-16 md:px-16 md:py-24'>
          <div className='flex max-w-3xl flex-col gap-8'>
            <div>
              <p className='text-body text-darker'>
                From our company's inception, innovation has been ingrained in
                our DNA. It's not just a buzzword; it's the driving force behind
                everything we do. Our founders were visionaries who understood
                that to make a real impact in the energy sector, we needed to
                lead with innovation.
              </p>
            </div>

            <div>
              <p className='text-body text-darker'>
                This commitment to cutting-edge solutions has allowed us to
                consistently push the boundaries of what's possible in energy
                efficiency, LED lighting, photovoltaic energy, and electric
                mobility. We've fostered a culture that encourages creativity,
                embraces change, and thrives on challenges. As we continue to
                grow, our dedication to pioneering solutions remains unwavering,
                positioning us as a trailblazer in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
