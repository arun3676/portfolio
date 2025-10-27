import React from 'react';
import { X } from 'lucide-react';

interface InfoModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

export function InfoModal({ title, content, onClose }: InfoModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
              <X size={24} />
            </button>
          </div>
          <div className="text-gray-700">{content}</div>
        </div>
      </div>
    </div>
  );
}
