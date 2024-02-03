'use client';
import { Button } from '@/components/ui/button';
import { MdEmail, MdCalendarMonth } from 'react-icons/md';
import Image from 'next/image';
import seanImage from './sean.png';

interface ManagerInfo {
  email: string;
  firstName: string;
  lastName: string;
  link: string;
  role: string;
}

const manager: ManagerInfo = {
  email: 'support@sematext.com',
  firstName: 'John',
  lastName: 'Doe',
  link: 'https://sematext.com/',
  role: 'Account Manager',
};

export const ManagerCard = () => (
  <div className="w-full max-w-md rounded border border-gray-300 bg-white p-4 text-primary">
    <div className="mb-3 text-base font-medium">Dedicated Account Manager</div>

    <div className="flex flex-wrap justify-between">
      <div className="flex">
        <div className="mr-2">
          <Image
            src={seanImage}
            alt="Sean Monahan"
            className="not-prose h-16 w-16 rounded-full border-2 border-white bg-cover shadow-md"
          />
        </div>

        <div className="mb-2 space-y-6">
          <div>
            <div className="text-lg font-medium text-primary">
              {manager.firstName} {manager.lastName}
            </div>
            <div className="text-sm font-normal">{manager.role}</div>
            <a
              className="flex items-center text-sm font-normal text-gray-700"
              href={`mailto:${manager.email}`}
            >
              <MdEmail className="h-4 w-4" />
              {manager.email}
            </a>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div className="mb-2 text-sm font-normal text-primary">
          Reach out to your Account Manager to discuss anything Sematext
          related.
        </div>
        <div className="flex max-w-xs pl-8 text-sm font-medium text-gray-600">
          <ul>
            <li>
              <span>Live Demos</span>
            </li>
            <li>
              <span>Pricing Optimization & Custom Plans</span>
            </li>
          </ul>
          <ul>
            <li>
              <span>Best Practice Sharing</span>
            </li>
            <li>
              <span>Roadmap Sneak Peek and Feature Requests</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Button
          className="flex h-8 cursor-pointer items-center rounded border border-gray-300 bg-white px-1 py-1 text-base font-semibold text-primary hover:bg-gray-100"
          onClick={() => {}}
        >
          <MdCalendarMonth />
          <span>Schedule a call</span>
        </Button>
      </div>
    </div>
  </div>
);
