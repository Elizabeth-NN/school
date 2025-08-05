import DonationForm from './DonationForm';

export const metadata = {
  title: 'Support Our School',
  description: 'Make a donation to support our educational programs',
};

export default function DonatePage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Support Our School</h1>
        <p className="mb-8 text-lg">
          Your generous donation helps us provide quality education to our students.
          Thank you for your support!
        </p>
        
        <DonationForm />
        
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Other Ways to Give</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Check payable to: [School Name]</li>
            <li>Matching gifts through your employer</li>
            <li>Planned giving and endowments</li>
          </ul>
        </div>
      </div>
    </main>
  );
}