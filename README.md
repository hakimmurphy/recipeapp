# RecipeApp — React + Vite

A lightweight recipe finder built with **React** and **Vite**. Type one or more ingredients and fetch matching recipes from a public recipe API. Clean single-page scaffolding ready for you to plug in your preferred API and styling. :contentReference[oaicite:1]{index=1}

---

## ✨ Features
- Ingredient-based search (e.g., “chicken, rice”)
- Recipe results list (title, image, and basic info)
- Fast dev workflow with Vite (HMR) and a simple `src/` layout :contentReference[oaicite:2]{index=2}

---

## 🧰 Tech Stack
- **React** (via Vite scaffold)
- **Vite** build tooling (`vite.config.js`)
- HTML/CSS/JavaScript project structure (`public/`, `src/`) :contentReference[oaicite:3]{index=3}

---

## 🚀 Getting Started

### 1) Clone & install
```bash
git clone https://github.com/hakimmurphy/recipeapp.git
cd recipeapp
npm install
```

### 2) Configure environment
Create a .env file in the project root. Vite exposes vars prefixed with VITE_:
```
# Example (adjust to your chosen API)
VITE_API_URL=https://api.example.com/recipes
VITE_API_KEY=your_api_key_here
```

### 3) Run locally
```
npm run dev
```

### 4) Build & preview
```
npm run build
npm run preview
```

---

## 📁 Project Structure (high-level)
```
.
├─ public/
├─ src/
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## 🛣️ Roadmap
- Filters (diet, cuisine, max ingredients)
- Persist last search to LocalStorage
- Skeletons/empty states & error handling
- Recipe detail route with instructions & nutrition

---

## 📄 License
MIT

---

## 🗣️ Author
Hakim Murphy
