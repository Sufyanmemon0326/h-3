import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">MORENT</h2>
            <p className="text-gray-600">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase mb-3">About</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Featured
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Business Relation
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800 uppercase mb-3">Community</h3>
            <ul className="text-gray-600 space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Invite a friend
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 flex justify-between items-center">
          <p className="text-sm text-gray-600">
            ©2022 MORENT. All rights reserved
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-sm text-gray-600 hover:underline">
              Privacy & Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
