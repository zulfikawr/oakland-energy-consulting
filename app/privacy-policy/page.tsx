export default function PrivacyPolicy() {
  return (
    <main className='min-h-screen'>
      <section className='bg-light relative h-[80vh] px-8 md:px-16'>
        <div className='absolute bottom-16 max-w-5xl'>
          <h1 className='text-h1 text-darkest mb-12'>
            Privacy and Cookies Policy
          </h1>
          <p className='text-body text-darker max-w-xl'>
            This privacy is designed to inform you about how we collect, use,
            and protect your personal information when you interact with our
            website.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className='px-8 py-16 md:px-16 md:py-24'>
        <div className='space-y-16 md:space-y-24'>
          <div>
            <h2 className='text-h2 text-darkest mb-6'>
              1. Information we collect
            </h2>

            <p className='text-body text-darker'>
              We gather various types of information to enhance and optimize our
              services. This includes personal information such as your name,
              email address, phone number, and mailing address, collected when
              you register for an account, contact us, or use our services. We
              also gather usage information, which encompasses details about
              your interactions with our website and services, including your IP
              address, browser type, device information, pages visited, and
              actions taken.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>
              2. How we use your information
            </h2>

            <p className='text-body text-darker'>
              Our utilization of the information we collect serves multiple
              purposes. We use your personal data to furnish requested services,
              such as responding to inquiries, processing orders, and delivering
              newsletters or updates if you opt to receive them. Additionally,
              we analyze usage information to gain insights into how our website
              and services are used, which informs our continuous improvement
              efforts, content customization, and enhancements to user
              experiences.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>3. Communication</h2>

            <p className='text-body text-darker'>
              We may employ your contact information to communicate with you
              concerning our services, provide updates, and convey important
              notices. You have the option to opt out of marketing
              communications at any time.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>
              4. Cookies and Tracking Technologies
            </h2>

            <p className='text-body text-darker'>
              To better understand your browsing behavior and improve your
              website experience, we utilize cookies and similar tracking
              technologies. Cookies are small data files stored on your device
              that facilitate our comprehension of your preferences. By
              utilizing our website, you implicitly consent to our use of
              cookies, as detailed in our Cookies Policy. You maintain the
              ability to manage your cookie preferences through your browser
              settings.
            </p>
          </div>

          <div>
            <h2 className='text-h2 text-darkest mb-6'>5. Security</h2>

            <p className='text-body text-darker'>
              We prioritize data security and employ reasonable measures to
              safeguard your information from unauthorized access, disclosure,
              alteration, or destruction. While we diligently strive to protect
              your data, it's important to acknowledge that no method of
              transmission over the internet or electronic storage is entirely
              secure. Consequently, we cannot provide absolute security
              guarantees.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
