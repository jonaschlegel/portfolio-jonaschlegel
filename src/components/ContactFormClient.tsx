'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    service: '',
    nextStep: '',
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreePolicy: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white">
          What service are you interested in?
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 text-black shadow-sm focus:border-primary-accent focus:ring-primary-accent"
          >
            <option value="">Select a service</option>
            <option value="illustration">Illustration</option>
            <option value="research support">Research Support</option>
            <option value="web design/development">
              Web Design/Development
            </option>
            <option value="others">Others</option>
          </select>
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          What is the next step you would want?
          <select
            name="nextStep"
            value={formData.nextStep}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 text-black shadow-sm focus:border-primary-accent focus:ring-primary-accent"
          >
            <option value="">Select a next step</option>
            <option value="consultation">Consultation</option>
            <option value="detailed_quotation">Detailed Quotation</option>
            <option value="project_brief">Project Brief</option>
            <option value="follow_up">Follow-up Discussion</option>
            <option value="custom_offer">Custom Offer</option>
            <option value="proposal_review">Proposal Review</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-white">
            First Name
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 text-black shadow-sm focus:border-primary-accent focus:ring-primary-accent"
            />
          </label>
        </div>
        <div>
          <label className="block text-sm font-medium text-white">
            Last Name
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 text-black shadow-sm focus:border-primary-accent focus:ring-primary-accent"
            />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Email Address
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 text-black shadow-sm focus:border-primary-accent focus:ring-primary-accent"
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium text-white">
          Message
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 text-black shadow-sm focus:border-primary-accent focus:ring-primary-accent"
          />
        </label>
      </div>

      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="agreePolicy"
            type="checkbox"
            name="agreePolicy"
            checked={formData.agreePolicy}
            onChange={handleInputChange}
            required
            className="size-4 rounded border-gray-300 text-primary-accent focus:ring-primary-accent"
          />
        </div>
        <div className="ml-2 text-sm">
          <label htmlFor="agreePolicy" className="font-medium text-gray-500">
            I agree with the friendly{' '}
            <Link
              href="/privacy-policy"
              className="text-primary-accent underline"
            >
              privacy policy
            </Link>
            .
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full rounded-full bg-primary-accent px-4 py-2 font-semibold text-black"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
