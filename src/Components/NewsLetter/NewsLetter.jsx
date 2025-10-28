import React from 'react';

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!email) {
      return;
    }
    else {
      e.target.email.value = '';
    }
  }
  return (
    <div className="newsletter bg-[#91ADC8] py-10 text-center">
      <h2 className="text-3xl font-bold mb-3">Subscribe to our Newsletter</h2>
      <p className="text-gray-800 mb-5">Get the latest updates and offers directly in your inbox.</p>

      <form onSubmit={handleSubscribe} className="flex justify-center gap-2">
        <input type="email" name="email" required placeholder="Enter your email"
          className="border p-2 w-70 rounded-md"
        />
        <button className="btn bg-[#1b3cc2] text-white font-semibold rounded-md px-5">
          Subscribe </button>
      </form>
    </div>

  );
};

export default NewsLetter;