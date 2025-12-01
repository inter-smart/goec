import { useState } from 'react';
import { X } from 'lucide-react';

export default function ThankYouModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Show Modal
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Modal Container */}
      <div className="relative z-50 w-full max-w-4xl flex items-center gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Image */}
        <div className="hidden md:block w-2/5 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Brochure mockup */}
                <div className="w-48 h-64 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg shadow-2xl transform -rotate-12 absolute -left-8 top-4 opacity-60" />
                <div className="w-48 h-64 bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg shadow-2xl transform -rotate-6 absolute -left-4 top-2 opacity-80" />
                <div className="w-48 h-64 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-2xl relative z-10 flex items-end justify-center pb-8">
                  <div className="flex items-center gap-2 text-white">
                    <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold">SC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 p-8 md:p-12 relative">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <svg 
                className="w-10 h-10 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Thank You!
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Brochure will be forward to your email, you<br />
              can download it from there
            </p>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setIsOpen(false)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}