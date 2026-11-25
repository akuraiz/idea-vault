# Idea Vault

Save your ideas. Make the good ones real. A private idea notebook that syncs across your devices.
by rksaa

## Put it online with GitHub Pages (free)

1. Create a new **public** GitHub repository (GitHub Pages is free only for public repos).
2. Upload `index.html`, `.nojekyll`, `manifest.webmanifest`, `sw.js`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` and `apple-touch-icon.png` to the repository root.
3. Go to **Settings > Pages**. Under "Build and deployment" choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

## Install on your phone (PWA)

- **iPhone (Safari):** open the site > Share > **Add to Home Screen**.
- **Android (Chrome):** menu > **Install app** / **Add to Home screen**.
- After updating files, close and reopen the app twice to pick up the new version.

## Firebase settings (project: idea-vault-d8668)

1. **Authentication > Settings > Authorized domains > Add domain**: `YOUR-USERNAME.github.io` (hostname only, no https:// and no path).
2. **Firestore > Rules**: paste `idea-vault-firestore.rules` and Publish.
3. **Authentication > Sign-in method**: Google must be enabled.
4. Optional but recommended: in Google Cloud Console > APIs & Services > Credentials, open the browser API key and set **Application restrictions: Websites** to `https://YOUR-USERNAME.github.io/*` and `http://localhost/*`.

## Using your own domain later

1. In **Settings > Pages > Custom domain** enter the domain (e.g. `ideas.example.com`) and Save. GitHub adds a `CNAME` file.
2. At your DNS provider add a **CNAME** record for the subdomain pointing to `YOUR-USERNAME.github.io` (no repo name). For a root domain add A records as listed in GitHub's docs.
3. Tick **Enforce HTTPS** once it becomes available (can take up to a day).
4. Add the new domain to Firebase **Authorized domains** and to the API key restrictions.

## Notes

- The Firebase web config inside `index.html` is public by design. Your data is protected by the Firestore rules and the two-email approval list.
- Only the two approved Google accounts can sign in; each person only sees their own ideas.
- Local test: serve the folder (`python -m http.server 5500`) and open `http://localhost:5500`. Add `?demo=1` to try it without signing in (sample data stays in your browser; works on localhost only).
