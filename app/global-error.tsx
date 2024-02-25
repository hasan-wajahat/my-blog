'use client';

const ErrorPage = ({ reset }: { reset: () => void }) => {
  return (
    <html>
      <body>
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
          <h1 className="text-4xl font-bold text-red-500">Error</h1>
          <p className="text-lg text-gray-700">Oops! Something went wrong.</p>
          <div className="mt-4 flex gap-4">
            <button
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={() => (window.location.href = '/')}
            >
              Go to Home page
            </button>
            <button
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              onClick={() => reset()}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
};

export default ErrorPage;
