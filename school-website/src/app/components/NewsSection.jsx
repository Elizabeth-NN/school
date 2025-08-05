import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: 'Greenwood Wins Science Olympiad',
    date: 'May 15, 2024',
    excerpt: 'Our team brought home 3 gold medals in the regional competition.',
    category: 'Achievements',
  },
  {
    id: 2,
    title: 'New STEM Lab Opening',
    date: 'April 28, 2024',
    excerpt: 'State-of-the-art facility to enhance science education.',
    category: 'Facilities',
  },
  {
    id: 3,
    title: 'Annual Sports Day Results',
    date: 'March 10, 2024',
    excerpt: 'Record participation with exciting competitions.',
    category: 'Events',
  },
];

export default function NewsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">School News</h2>
          <Link
            href="/news"
            className="text-blue-600 hover:underline font-medium"
          >
            View All News →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full mb-2">
                  {news.category}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <Link
                  href={`/news/${news.id}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}