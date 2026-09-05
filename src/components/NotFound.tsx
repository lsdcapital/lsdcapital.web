export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111111] text-gray-100 px-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-gray-400">This page doesn't exist.</p>
        <a
          href="/"
          className="inline-block bg-white text-black rounded-full px-6 py-3 font-semibold"
        >
          Back home
        </a>
      </div>
    </div>
  );
}
