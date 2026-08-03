# Deployment Guide

## Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: portfolio scaffold"
git branch -M main
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

## Option A: Frontend on GitHub Pages, Backend on Render

### Backend (Render.com — free tier, supports .NET)
1. Push your code to GitHub (above).
2. Go to [render.com](https://render.com) → New → Web Service → connect your repo.
3. Root directory: `server/PortfolioApi`
4. Build command: `dotnet publish -c Release -o out`
5. Start command: `dotnet out/PortfolioApi.dll`
6. Add environment variable `ConnectionStrings__DefaultConnection` pointing to your Azure SQL (or other hosted SQL Server) connection string.
7. Add environment variable `AllowedOrigins__0` = your GitHub Pages URL (e.g. `https://your-username.github.io`).
8. Deploy — note the live API URL.

### Database (Azure SQL — free tier)
1. Create a free Azure account if needed.
2. Azure Portal → Create Resource → SQL Database → choose the free tier offer.
3. Set firewall rules to allow Render's IP (or "Allow Azure services" + your IP for migrations).
4. Copy the connection string into Render's environment variable above.
5. Run migrations once against this database (you can run `dotnet ef database update` locally pointed at the Azure connection string).

### Frontend (GitHub Pages)
1. In `client/src/environments/environment.prod.ts`, set `apiUrl` to your Render API URL.
2. Install the GitHub Pages helper:
   ```bash
   cd client
   npm install -g angular-cli-ghpages
   ```
3. Build and deploy:
   ```bash
   ng build --configuration production --base-href "https://your-username.github.io/portfolio/"
   npx angular-cli-ghpages --dir=dist/portfolio-client
   ```
4. In your GitHub repo settings → Pages, confirm the `gh-pages` branch is set as the source.
5. Site will be live at `https://your-username.github.io/portfolio/`.

## Option B: Everything on Azure (more "enterprise", good portfolio talking point)
- Backend → Azure App Service (free F1 tier)
- Database → Azure SQL (free tier)
- Frontend → Azure Static Web Apps (free tier, has built-in GitHub Actions CI/CD)

This option lets you say "deployed end-to-end on Azure with CI/CD" — a stronger interview story, but a bit more setup. Ask me if you'd like the detailed steps for this path instead.

## Option C: Vercel for frontend (simplest)
1. Go to [vercel.com](https://vercel.com) → Import your GitHub repo.
2. Root directory: `client`
3. Build command: `ng build --configuration production`
4. Output directory: `dist/portfolio-client`
5. Deploy — Vercel gives you a live URL instantly and auto-redeploys on every push to `main`.
