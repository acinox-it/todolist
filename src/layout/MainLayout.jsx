import { Link, Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-gray-100">
      <nav className="flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold text-yellow-400">🗂️ To-Do App</h1>
        <div className="flex gap-4">
          <Link to="/" className="hover:underline text-gray-50">Accueil</Link>
          <Link to="/todo" className="hover:underline text-gray-50">Mes Tâches</Link>
        </div>
      </nav>

      <main className="flex-grow max-w-2xl mx-auto bg-white text-gray-800 p-6 rounded-lg shadow-lg">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-6">
        © {new Date().getFullYear()} Acinox • Tous droits réservés
      </footer>
    </div>
  );
}

export default MainLayout;

