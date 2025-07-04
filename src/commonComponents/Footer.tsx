const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-10 pb-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Library</h3>
            <p className="text-sm">
              A simple and efficient Library Management System for managing books and borrow records with ease.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/books" className="hover:underline">All Books</a></li>
              <li><a href="/create-book" className="hover:underline">Add Book</a></li>
              <li><a href="/borrow-summary" className="hover:underline">Borrow Summary</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email: <a href="mailto:hayderbd4290@gmail.com" className="hover:underline">hayderbd4290@gmail.com</a></li>
              <li>Phone: +880 123 456 789</li>
              <li>Location: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Developer Credit */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-3">Developer</h3>
            <p className="text-sm">
              Made with ❤️ by <a href="https://hayder-ali.web.app" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">Hayder Ali</a>
            </p>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Library Management. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
