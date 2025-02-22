const ErrorPage = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
          <p className="text-2xl font-semibold text-gray-600 mt-4">Page Not Found</p>
          <p className="text-gray-500 mt-2">{"The page you are looking for doesn't exist or has been moved."}</p>
  
          <a href="/" className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition duration-300">
            Go Home
          </a>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
  