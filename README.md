# GreenNest – Indoor Plant Care & Store
Live Link :green-nest-house.netlify.app

Simple React + Vite single-page app for indoor plant browsing, booking consultations, and basic Firebase authentication.

## Features
- Firebase Authentication (Email/Password, Google Sign-In, Forgot Password)
- Protected routes for Plant Details and Profile
- Plants data loaded from `public/plants.json` (6 sample plants)
- Home sections: Hero (Framer Motion), Top Rated Plants, Plant Care Tips, Green Experts, Eco Decor Ideas
- Booking form on Plant Details with success toast
- Profile update (displayName and photoURL)

## Quick setup

1. Install dependencies

```powershell
pnpm install
# or
npm install
```

2. Firebase configuration

For this assignment repo, Firebase is already configured in `src/firebase/firebase.config.js` with a demo project so the app works out of the box for examiners.

If you want to plug in **your own Firebase project**, replace the config object in that file or refactor it to read from `VITE_FIREBASE_*` env vars.

3. Run the dev server

```powershell
npm run dev
# or
pnpm dev
```

4. Open the app

Visit: (https://green-nest-indoor-plant-store.netlify.app/)

## Notes for examiners
- Plant data is in `public/plants.json` and contains the required fields: `plantId, plantName, category, price, rating, description, image, availableStock, careLevel, providerName`.
- Protected routes use `ProtectedRoute` which redirects unauthenticated users to `/login` and returns them to the intended page after successful login.
- Password validation on signup enforces: at least one uppercase, one lowercase, and minimum length 6.
- Forgot Password flow: there is a dedicated `/forgot-password` page that triggers Firebase reset email.

## Files of interest
- `src/firebase/firebase.config.js` — Firebase initialization using Vite env variables
- `src/provider/AuthProvider.jsx` — Auth helpers (createUser, signIn, Google sign-in, signOut, resetPassword, updateProfile)
- `public/plants.json` — sample products data
- `src/pages/Plants/PlantDetails.jsx` — protected detail page with booking form

If you'd like, I can:
- Add unit tests for key components
- Deploy the app to Vercel/Netlify and add a live link
- Improve accessibility and add keyboard support for the navbar

---
Generated/updated: October 2025
