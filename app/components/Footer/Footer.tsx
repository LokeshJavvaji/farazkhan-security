import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t py-8 bg-white">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-600">Stay updated with our latest news.</p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="border rounded-md px-3 py-2 w-full sm:flex-1"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
              Subscribe
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-gray-600">42B plashet road,London,E13 0PU,united Kingdom </p>
          <p className="text-sm text-gray-600">farazkhanlimited@gmail.com</p>
          <p className="text-sm text-gray-600">07405502390</p>
          <p className="text-sm text-gray-600">&copy; 2024 FARAZKHAN SECURITY LTD. All rights reserved.</p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <Image src="/Preview.png" alt="Company Logo" width={300} height={150} />
    
        </div>

      </div>
    </footer>
  );
}
