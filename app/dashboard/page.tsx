import ChartCard from "@/components/ChartCard";
import { SuccessRateCard } from "@/components/StatCard";
import { PaymentIssuesCard } from "@/components/PaymentIssuesCard";
import MessageList from "@/components/MessageList";

export default function DashboardPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-orange-300">👋 Hey Martins!</h1>
        <p className="mt-2 text-xl font-semibold text-gray-900">
          You earned <span className="text-gray-900">NGN 3,000,000</span> this month.
        </p>
      </div>

      <section className="flex flex-col gap-6">
        <div className="space-y-6">
          <ChartCard />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <SuccessRateCard />
            <PaymentIssuesCard />
          </div>
          {/* Message List - visible on small screens, hidden on large screens (where it's in the sidebar) */}
          <div className="lg:hidden">
            <MessageList />
          </div>
        </div>
      </section>
    </>
  );
}

