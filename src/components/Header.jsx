import { Bell, User } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center flex-1 max-w-xl">
        {/*  <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div> */}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-6 w-6 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="text-right">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
