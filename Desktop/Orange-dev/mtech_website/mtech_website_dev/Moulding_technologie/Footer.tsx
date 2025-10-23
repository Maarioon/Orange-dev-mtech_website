
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';

// Footer Component
function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4">Questions or Partnerships?</h3>
            <p className="text-gray-400 text-sm mb-4">
              No 48 Aliaba Close, Off Awaye
              <br />
              Lagos, Badagry Road Estate,
              <br />
              Ojo Alaba, Lagos State
            </p>
            <p className="text-gray-400 text-sm">info@aladejoipolystyrene.com</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Gallery</a></li>
              <li><a href="#" className="hover:text-white">Sectors</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Sectors</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Manufacturing</a></li>
              <li><a href="#" className="hover:text-white">Training</a></li>
              <li><a href="#" className="hover:text-white">Building</a></li>
              <li><a href="#" className="hover:text-white">Packaging</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">f</a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">t</a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">in</a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">ig</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          © Iteadejovpolystyrene.ng
        </div>
      </div>
    </footer>
  );
}

export default Footer;
