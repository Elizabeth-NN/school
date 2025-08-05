import Link from 'next/link';

const quickLinks = [
  {
    title: 'Academics',
    description: 'Explore our curriculum and programs',
    href: '/academics',
    icon: '🎓',
  },
  {
    title: 'Admissions',
    description: 'Learn about our admission process',
    href: '/admissions',
    icon: '📝',
  },
  {
    title: 'School Calendar',
    description: 'View upcoming events and holidays',
    href: '/events',
    icon: '📅',
  },
  {
    title: 'Parent Portal',
    description: 'Access grades and school information',
    href: '/portal',
    icon: '👨‍👩‍👧‍👦',
  },
];

export default function QuickLinks() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group border border-gray-200 rounded-lg p-6 hover:bg-blue-50 hover:border-blue-200 transition-all"
            >
              <div className="text-4xl mb-4">{link.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600">
                {link.title}
              </h3>
              <p className="text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}