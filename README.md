# doc-page

Vite + Vue app that consumes **`@toife/vue` from source** via `file:../vue` (sibling package). Run `yarn` from this folder after cloning; the library is bundled when you `yarn dev` / `yarn build` here — nothing is pre-built inside `@toife/vue` for this workflow.

Yarn is configured with **`nodeLinker: node-modules`** (see `.yarnrc.yml`) so you get a normal `node_modules` folder instead of Plug’n’Play only (`.pnp.cjs`).

## Scripts

- `yarn dev` — dev server (port 5173)
- `yarn build` — typecheck + production build
- `yarn preview` — preview production build

## Notes

- Vite alias `@` points at `node_modules/@toife/vue/src` so the library’s internal `@/…` imports resolve. Use the `@doc` alias for this app’s `src/` (see `tsconfig.app.json` paths + `vite.config.ts`).
