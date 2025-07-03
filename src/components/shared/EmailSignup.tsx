'use client';

import { saveEmailSignup } from '@/lib/supabase-utils';
import { useState } from 'react';

interface EmailSignupProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export const EmailSignup: React.FC<EmailSignupProps> = ({
  title = "Stay Updated",
  placeholder = "Enter your email address",
  buttonText = "Get Updates",
  className = ""
}) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await saveEmailSignup(email);

    if (!result.success) {
      console.error('Email signup error:', result.error);
      setIsLoading(false);
      return;
    }

    setSubmitted(true);
    setEmail('');
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <div className={`bg-gray-50 border border-gray-200 p-8 text-center ${className}`}>
        <div className="text-green-600 text-2xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h3>
        <p className="text-gray-600">You&apos;ve been successfully subscribed to our updates.</p>
      </div>
    );
  }

  return (
    <div className={`bg-gray-50 border border-gray-200 p-6 max-w-xl mx-auto ${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <div className="flex-1 max-w-[250px] px-5 py-2 bg-[#F5F5F5] outline outline-[0.72px] outline-[#E8E8E8] outline-offset-[-0.72px] flex items-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            required
            className="w-full bg-transparent border-none outline-none text-[#202020] font-['Britti_Sans'] text-sm md:text-base"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="px-5 py-2 bg-[#202020] text-white font-['Britti_Sans'] text-sm md:text-base hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Subscribing...' : buttonText}
        </button>
      </form>
    </div>
  );
};

export default EmailSignup;
