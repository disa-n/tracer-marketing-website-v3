'use client';

import { useState } from 'react';

export default function BlogSubscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="mt-16">
      <div className="bg-[#FCFCFC] border border-[#E8E8E8] px-6 py-10 rounded-md max-w-xl mx-auto">
        <h3 className="text-2xl font-britti-sans mb-4 text-[#202020]">Get updates from Tracer</h3>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your e-mail"
              required
              className="flex-1 border border-gray-300 px-4 py-3 text-[#202020] bg-[#F5F5F5] placeholder:text-[#868686] outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#202020] text-[#FCFCFC] px-6 py-3 hover:bg-black transition"
            >
              Get Updates
            </button>
          </form>
        ) : (
          <p className="text-green-600 mt-4">Thanks! You&apos;re subscribed.</p>
        )}
      </div>
    </section>
  );
}
