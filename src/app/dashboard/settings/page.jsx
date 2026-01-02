"use client";
import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    salonName: "",
    phone: "",
    email: "",
    address: "",
  });

  const [saved, setSaved] = useState(false);

  // Load saved settings
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("settings"));
    if (stored) setSettings(stored);
  }, []);

  // Save settings
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("settings", JSON.stringify(settings));
    setSaved(true);

    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="max-w-3xl bg-white p-8 rounded shadow">
      <h1 className="text-3xl font-semibold mb-6">Settings</h1>

      {saved && (
        <p className="mb-4 text-green-600 font-medium">
          ✅ Settings saved successfully
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Salon Name */}
        <div>
          <label className="block mb-1 font-medium">Salon Name</label>
          <input
            type="text"
            value={settings.salonName}
            onChange={(e) =>
              setSettings({ ...settings, salonName: e.target.value })
            }
            className="w-full border p-3 rounded"
            placeholder="Blush Beauty Parlour"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="text"
            value={settings.phone}
            onChange={(e) =>
              setSettings({ ...settings, phone: e.target.value })
            }
            className="w-full border p-3 rounded"
            placeholder="+8801XXXXXXXXX"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) =>
              setSettings({ ...settings, email: e.target.value })
            }
            className="w-full border p-3 rounded"
            placeholder="info@blush.com"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <textarea
            rows="3"
            value={settings.address}
            onChange={(e) =>
              setSettings({ ...settings, address: e.target.value })
            }
            className="w-full border p-3 rounded"
            placeholder="Dhaka, Bangladesh"
          ></textarea>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}
