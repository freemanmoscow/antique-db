import Link from 'next/link';
import { getSession } from '@/lib/auth';

export default async function Home() {
  const session = await getSession();

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">🏛️ Antique Database</h1>
          <p className="text-xl text-gray-600 mb-8">
            Organize and catalog your antique collection with ease
          </p>
          <Link
            href="/auth/signin"
            className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition text-lg"
          >
            Sign In with Google
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">🏛️ Antique DB</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">{session.user?.name}</span>
            <img
              src={session.user?.image || ''}
              alt={session.user?.name || 'User'}
              className="w-10 h-10 rounded-full"
            />
            <Link href="/api/auth/signout" className="text-red-600 hover:text-red-700 font-medium">
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/dashboard"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">📦 My Items</h2>
            <p className="text-gray-600">View and manage your antique collection</p>
          </Link>

          <Link
            href="/dashboard/upload"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">📸 Add Item</h2>
            <p className="text-gray-600">Add new antiques with photos and details</p>
          </Link>

          <Link
            href="/dashboard/storage"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">📍 Storage Locations</h2>
            <p className="text-gray-600">Organize where your items are stored</p>
          </Link>

          <Link
            href="/dashboard/tags"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">🏷️ Tags & Categories</h2>
            <p className="text-gray-600">Manage manufacturers, brands, and types</p>
          </Link>

          <Link
            href="/dashboard/sets"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">📚 Sets</h2>
            <p className="text-gray-600">Group related items into collections</p>
          </Link>

          <Link
            href="/dashboard/sharing"
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">👥 Sharing</h2>
            <p className="text-gray-600">Collaborate with other users</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
