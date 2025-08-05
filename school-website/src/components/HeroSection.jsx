import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to Greenwood High
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Where we nurture young minds to become future leaders through
              innovative education and holistic development.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/admissions"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium"
              >
                Apply Now
              </Link>
              <Link
                href="/about"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero-image.jpg"
              alt="Students at Greenwood High"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}