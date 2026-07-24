# Quantumheart Portfolio

A PICO-8 themed static portfolio site.

## Deploy to GitHub Pages

1. Create a new repository (e.g., `portfolio`) and push these files:
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Quantumheart/portfolio.git
   git push -u origin main
   ```

2. Go to **Settings → Pages** on the repo.

3. Under **Source**, select **Deploy from a branch**.

4. Select **main** branch and **/ (root)** folder, then click **Save**.

5. Your site will be live at `https://quantumheart.github.io/portfolio/`.

## Run locally

Just open `index.html` in a browser, or serve it:
```bash
python3 -m http.server 8000
# visit http://localhost:8000
```