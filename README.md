# 💳 H2B Demo Bank App (React Native + Expo)

A demo banking app built with **Expo**, featuring modern tooling, state management, animations, and CI/CD integration.

---

## 🚀 Features

- 🧩 3 main screens — **Dashboard**, **Transaction**, and **Success**
- 💾 **Zustand** for global state management
- 🎨 **Tailwind (NativeWind)** for styling
- ⚡ **Memoization** and performance optimizations
- 🌀 **ActivityIndicator** for loading states
- 🎬 **Animations** via Reanimated
- 🧱 **Storybook 9** setup for component isolation and UI documentation
- 📦 TypeScript (`strict` mode) for full type safety

---

## 🧰 Tooling & Developer Experience

| Tool                                    | Purpose                                                     |
| --------------------------------------- | ----------------------------------------------------------- |
| **ESLint + Prettier**                   | Linting & code formatting with Husky pre-commit hooks       |
| **Husky + lint-staged**                 | Auto-fix and formatting on commit                           |
| **TypeScript (`tsc --noEmit`)**         | Type checking                                               |
| **Jest + React Native Testing Library** | Unit tests for UI components and Zustand store              |
| **Storybook 9**                         | Component isolation, interactive testing, and documentation |
| **CI (GitHub Actions)**                 | Runs lint, typecheck, and tests on push & PR                |
| **.env + react-native-dotenv**          | Environment variables (mocked for demo)                     |

---

## 🧪 Testing

Unit tests are implemented with **Jest** and **@testing-library/react-native**.

Run all tests:

```bash
npm run test
```

Example tested items:

- `Button` → UI + event handling + snapshot test
- `depositeStore` → Zustand store logic

---

## ⚙️ Environment Variables

| Variable   | Description           | Example                     |
| ---------- | --------------------- | --------------------------- |
| `API_URL`  | Base URL for mock API | `https://api.demo-bank.dev` |
| `APP_ENV`  | Environment           | `development`               |
| `APP_NAME` | App title             | `H2B Demo Bank`             |

> These are mocked for demonstration purposes. `.env` is excluded from git.

---

## 🧑‍💻 Scripts

| Command             | Description           |
| ------------------- | --------------------- |
| `npm start`         | Start Expo project    |
| `npm run lint`      | Run ESLint + Prettier |
| `npm run tsc`       | Type-check project    |
| `npm run test`      | Run Jest tests        |
| `npm run storybook` | Launch Storybook      |

---

## 🔄 Continuous Integration (GitHub Actions)

CI runs automatically on **push** and **pull request**, checking:

- ✅ TypeScript types (`tsc --noEmit`)
- ✅ ESLint & Prettier
- ✅ Jest tests

> Config located at: `.github/workflows/ci.yml`

---

## 🧠 Architecture Overview

```
app/
 ┣ (tabs)/        # Dashboard / Refferal
 ┣ deposit        # Transaction / Success
src/
 ┣ components/     # Reusable UI elements (Button, CardItem, etc.)
 ┣ sections/       # Sectioned UI (Header, TransactionsList, Card)
 ┣ store/          # Zustand global state
utils/             # Helper functions & mock data
types/             # Typescript types
```

---

## 🧩 Storybook

Storybook v9 is configured for isolated UI testing and documentation.

To start Storybook go to '/storybook'

---

## 🔧 Notes / Best Practices

- All imports use alias `@/src` for clean paths.
- Tailwind classes applied using NativeWind.
- Zustand state fully tested and memoized for performance.
- ActivityIndicator and animations improve UX feedback.
- Minimal mocked .env demonstrates handling of environment variables.

---

## 🏗️ Future Improvements

- 🌐 API integration (real transactions)
- 📱 Dark mode / theming
- 📈 Analytics & error tracking

---

## 👩‍💻 Author

**Dmytriy Demydov**
React Native Developer
📧 [[dmytriy.demydov@gmail.com](mailto:dmytriy.demydov@gmail.com)]
🌐 [[LinkedIn](https://www.linkedin.com/in/dmytriy-demydov-269225143/) / [GitHub](https://github.com/Demydov093)]
