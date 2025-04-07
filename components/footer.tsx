import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='bg-darkest text-lightest px-8 py-16 md:px-16 md:py-24'>
      <div className='mb-16 flex flex-col justify-between gap-10 md:flex-row'>
        <div className='grid max-w-3xl flex-1 grid-cols-1 gap-8 sm:grid-cols-3'>
          <div>
            <h3 className='text-body mb-4 font-medium'>Pages</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/services'
                  className='text-dark hover:text-lightest text-sm'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/about-us'
                  className='text-dark hover:text-lightest text-sm'
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href='/portfolio'
                  className='text-dark hover:text-lightest text-sm'
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href='/contact-us'
                  className='text-dark hover:text-lightest text-sm'
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-body mb-4 font-medium'>Social Media</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='#'
                  className='text-dark hover:text-lightest text-sm'
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='text-dark hover:text-lightest text-sm'
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-body mb-4 font-medium'>Legal</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-dark hover:text-lightest text-sm'
                >
                  Privacy and Cookies Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/terms-conditions'
                  className='text-dark hover:text-lightest text-sm'
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-1 items-start justify-center md:justify-end'>
          <Image
            src='/images/iso.png'
            alt='iso'
            width={250}
            height={70}
            className='object-contain'
          />
        </div>
      </div>

      <div className='border-darker flex flex-col justify-center gap-4 border-t pt-8 text-center md:flex-row md:items-center md:justify-between'>
        <div className='text-dark text-sm'>Oakland Energy Consulting ©</div>
        <div className='text-dark text-sm'>
          Design by Acmik. Developed by Zulfikar
        </div>
      </div>
    </footer>
  );
}
