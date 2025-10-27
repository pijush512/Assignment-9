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
    <div className="newsletter bg-gray-100 py-10 text-center">
      <h2 className="text-3xl font-bold mb-3">Subscribe to our Newsletter</h2>
      <p className="text-gray-600 mb-5">Get the latest updates and offers directly in your inbox.</p>

      <form onSubmit={handleSubscribe} className="flex justify-center gap-2">
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="border p-3 w-80 rounded-md"
        />
        <button className="btn bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Subscribe </button>
      </form>
    </div>

  );
};

export default NewsLetter;