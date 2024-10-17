import React from 'react';

const AddBusinessPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add Your Business</h1>
      <p className="mb-8">Join our directory and reach more customers. Fill out the form below to get started.</p>

      <form className="space-y-6">
        <div>
          <label htmlFor="businessName" className="block mb-2 font-semibold">Business Name</label>
          <input type="text" id="businessName" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label htmlFor="address" className="block mb-2 font-semibold">Address</label>
          <input type="text" id="address" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 font-semibold">Phone</label>
          <input type="tel" id="phone" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
          <input type="email" id="email" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label htmlFor="website" className="block mb-2 font-semibold">Website</label>
          <input type="url" id="website" className="w-full p-2 border rounded" />
        </div>

        <div>
          <label htmlFor="category" className="block mb-2 font-semibold">Category</label>
          <select id="category" className="w-full p-2 border rounded">
            <option value="">Select a category</option>
            <option value="restaurants">Restaurants</option>
            <option value="health-wellness">Health & Wellness</option>
            <option value="home-services">Home Services</option>
            <option value="shopping">Shopping</option>
            <option value="entertainment">Entertainment</option>
            <option value="professionals">Professionals</option>
          </select>
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-semibold">Business Description</label>
          <textarea id="description" rows={4} className="w-full p-2 border rounded"></textarea>
        </div>

        <div>
          <label htmlFor="photos" className="block mb-2 font-semibold">Upload Photos</label>
          <input type="file" id="photos" multiple className="w-full p-2 border rounded" />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          Submit Listing
        </button>
      </form>
    </div>
  );
};

export default AddBusinessPage;