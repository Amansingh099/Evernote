import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './account.css'
export default function Account() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container mx-auto px-4 py-8 accountinfo">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="text-center">
              <img className="w-32 h-32 md:w-48 md:h-auto rounded-full mx-auto" src={user.picture} alt={user.name} />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <div className="mt-8 text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
