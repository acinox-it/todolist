# 📝 To-Do List App

Une application de gestion de tâches moderne construite avec **React**, **Vite**, **Tailwind CSS**, et **React Router**. Elle permet d’ajouter, filtrer, marquer comme terminées et supprimer des tâches, avec une interface responsive et stylisée en jaune, blanc et gris foncé.

---

## 🚀 Fonctionnalités

- ✅ Ajout et suppression de tâches
- 🟡 Marquage comme terminée
- 🔍 Filtrage : toutes / à faire / terminées
- 💾 Persistance via `localStorage`
- 🧭 Routing avec plusieurs pages
- 🎨 Design moderne avec icônes Heroicons
- 📊 Compteur de tâches affichées
- 📌 Favicon personnalisable

---

## 🧱 Stack technique

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Heroicons](https://heroicons.com/)

---

## 📁 Structure du projet
````markdown
TODOLIST/
├── docs/
├── public/
│   ├── favicon.svg
│   └── vite.svg
├── src/
│   ├── assets/              # Images, icônes, SVG, etc.
│   ├── components/          # Composants réutilisables
│   │   ├── TodoInput.jsx
│   │   ├── TodoItem.jsx
│   │   └── Todos.jsx        ← à renommer en TodoList.jsx ?
│   ├── layout/              # Layout global (nav, footer)
│   │   └── MainLayout.jsx
│   ├── pages/               # Pages routées (Home, Todo)
│   │   └── Home.jsx
│   ├── App.jsx              # Ancien point d’entrée (peut être supprimé si non utilisé)
│   ├── App.css              # Styles spécifiques à App.jsx
│   ├── index.css            # Styles globaux + Tailwind
│   └── main.jsx             # Point d’entrée + routing
├── index.html               # Template HTML
├── tailwind.config.js       # Config Tailwind
├── vite.config.js           # Config Vite
├── postcss.config.js        # Config PostCSS
├── eslint.config.js         # Linting
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
````
---

## 🛠️ Installation

```bash
# 1. Cloner le projet
  git clone https://github.com/acinox-it/todolist-app.git
cd todolist-app

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

---

📄 Licence

Ce projet est open-source sous licence MIT.
Voir le fichier [LICENSE](./LICENSE) pour plus d’informations.

---

## 👨‍💻 Auteur

Développé par **Acinox** – Développeur full-stack et étudiant, passionné par les systèmes modulaires, sécurisés et maintenables.

