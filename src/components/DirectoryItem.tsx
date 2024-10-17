import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

interface DirectoryEntry {
  id: number;
  name: string;
  category: string;
  address: string;
  phone: string;
  email: string;
  website: string;
}

interface DirectoryItemProps {
  entry: DirectoryEntry;
}

const DirectoryItem: React.FC<DirectoryItemProps> = ({ entry }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{entry.name}</h2>
      <p className="text-sm text-gray-600 mb-4">{entry.category}</p>
      <div className="space-y-2">
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-gray-400" />
          <span className="text-sm">{entry.address}</span>
        </div>
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2 text-gray-400" />
          <span className="text-sm">{entry.phone}</span>
        </div>
        <div className="flex items-center">
          <Mail className="w-5 h-5 mr-2 text-gray-400" />
          <span className="text-sm">{entry.email}</span>
        </div>
        <div className="flex items-center">
          <Globe className="w-5 h-5 mr-2 text-gray-400" />
          <a href={`https://${entry.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
            {entry.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DirectoryItem;