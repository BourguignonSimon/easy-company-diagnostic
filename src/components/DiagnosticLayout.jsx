import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DiagnosticLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-xl font-bold"
              >
                Easy Company
              </Button>
            </div>
            <Button
              variant="outline"
              onClick={() => navigate('/')}
            >
              Retour aux diagnostics
            </Button>
          </div>
        </div>
      </nav>

      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-white shadow-sm mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Easy Company. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DiagnosticLayout;