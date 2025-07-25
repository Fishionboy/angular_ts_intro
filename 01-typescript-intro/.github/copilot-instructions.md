# Copilot Instructions for This Codebase

## Project Overview
- This is a TypeScript project using Vite for development and build.
- The entry point is `src/main.ts`, which imports topic modules (e.g., `src/topics/01-basic-types.ts`).
- The main HTML file is `index.html`, which loads the app via `<script type="module" src="/src/main.ts"></script>`.

## File Structure
- `src/` contains all TypeScript source files and topics.
- `src/topics/` holds individual topic/example files, each demonstrating a TypeScript concept.
- `public/` is for static assets (e.g., images, icons).
- `style.css` is imported in `main.ts` for global styles.

## Key Patterns
- Each topic file (e.g., `01-basic-types.ts`) is imported directly in `main.ts` for execution and demonstration.
- Console output from topic files appears in the browser console, not the terminal.
- Use ES module imports; relative paths are required (e.g., `import './topics/01-basic-types'`).
- Topic files may use `export {}` to ensure module scope, but are not meant to export functions/classes for reuse.

## Developer Workflows
- **Start Dev Server:** Use `npm run dev` to launch the Vite dev server. Open the browser at the provided local URL.
- **Build for Production:** Use `npm run build` to generate the production build in `dist/`.
- **Preview Build:** Use `npm run preview` to serve the production build locally.
- **Add a New Topic:** Create a new `.ts` file in `src/topics/`, then import it in `src/main.ts`.
- **Debugging:** Use browser DevTools (F12) to view console logs and debug TypeScript output.

## Conventions
- All TypeScript files use ES module syntax.
- Topic files are self-contained and demonstrate a single concept.
- No framework-specific code (e.g., Angular, React) is present—this is a pure TypeScript/Vite setup.
- Keep `main.ts` as the orchestrator for importing and running topic files.

## External Dependencies
- Vite is used for development/build (see `package.json`).
- No other major dependencies are present by default.

## Example: Adding a Topic
1. Create `src/topics/02-new-topic.ts`:
   ```typescript
   console.log('Hello from new topic!');
   export {};
   ```
2. Import it in `src/main.ts`:
   ```typescript
   import './topics/02-new-topic';
   ```

---

For questions about build, import paths, or debugging, check `package.json`, `tsconfig.json`, and Vite documentation.
