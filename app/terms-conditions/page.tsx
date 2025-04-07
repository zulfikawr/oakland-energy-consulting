export default function TermsConditions() {
  return (
    <main className='min-h-screen'>
      <section className='bg-light relative h-[80vh] px-8 md:px-16'>
        <div className='absolute bottom-16 max-w-5xl'>
          <h1 className='text-h1 text-darkest mb-12'>Terms & Conditions</h1>
          <p className='text-body text-darker max-w-xl'>
            Please read these terms and conditions carefully before using our
            services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        <div className='space-y-16 md:space-y-24'>
          <div>
            <h2 className='text-h2 text-darkest mb-6'>
              1. Acceptance of Terms
            </h2>

            <p className='text-body text-darker'>
              By accessing or using Oakland Energy Consulting's services, you
              agree to be bound by these Terms and Conditions and all applicable
              laws and regulations. If you do not agree with any of these terms,
              you are prohibited from using or accessing our services.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>2. Use License</h2>

            <p className='text-body text-darker'>
              Permission is granted to temporarily access the materials on
              Oakland Energy Consulting's website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not modify or
              copy the materials, use the materials for any commercial purpose,
              attempt to decompile or reverse engineer any software contained on
              the website, remove any copyright or other proprietary notations
              from the materials, or transfer the materials to another person or
              "mirror" the materials on any other server.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>3. Disclaimer</h2>

            <p className='text-body text-darker'>
              The materials on Oakland Energy Consulting's website are provided
              on an 'as is' basis. Oakland Energy Consulting makes no
              warranties, expressed or implied, and hereby disclaims and negates
              all other warranties including, without limitation, implied
              warranties or conditions of merchantability, fitness for a
              particular purpose, or non-infringement of intellectual property
              or other violation of rights. Further, Oakland Energy Consulting
              does not warrant or make any representations concerning the
              accuracy, likely results, or reliability of the use of the
              materials on its website or otherwise relating to such materials
              or on any sites linked to this site.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>4. Limitations</h2>

            <p className='text-body text-darker'>
              In no event shall Oakland Energy Consulting or its suppliers be
              liable for any damages (including, without limitation, damages for
              loss of data or profit, or due to business interruption) arising
              out of the use or inability to use the materials on Oakland Energy
              Consulting's website, even if Oakland Energy Consulting or an
              authorized representative has been notified orally or in writing
              of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>
              5. Revisions and Errata
            </h2>

            <p className='text-body text-darker'>
              The materials appearing on Oakland Energy Consulting's website
              could include technical, typographical, or photographic errors.
              Oakland Energy Consulting does not warrant that any of the
              materials on its website are accurate, complete, or current.
              Oakland Energy Consulting may make changes to the materials
              contained on its website at any time without notice. Oakland
              Energy Consulting does not, however, make any commitment to update
              the materials.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
