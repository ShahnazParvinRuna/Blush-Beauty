export default function DashboardHome() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold">Total Services</h3>
        <p className="text-3xl mt-2">8</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold">Total Bookings</h3>
        <p className="text-3xl mt-2">23</p>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold">Today Revenue</h3>
        <p className="text-3xl mt-2">$240</p>
      </div>
    </div>
  );
}
