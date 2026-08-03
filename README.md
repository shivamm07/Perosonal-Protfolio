# Shivamkumar Prasad — Personal Portfolio

Full-stack portfolio built with **Angular**, **ASP.NET Core Web API**, and **SQL Server**.

## Tech Stack
- **Frontend:** Angular 18 (standalone components), TypeScript
- **Backend:** ASP.NET Core 8 Web API, Entity Framework Core
- **Database:** SQL Server (LocalDB for dev, Azure SQL for prod)

## Project Structure
```
portfolio/
├── client/   → Angular frontend
└── server/   → ASP.NET Core Web API backend
    └── PortfolioApi/
```

## Getting Started

### Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js 18+](https://nodejs.org) and npm
- [Angular CLI](https://angular.dev/tools/cli): `npm install -g @angular/cli`
- SQL Server LocalDB (comes with Visual Studio) or full SQL Server / Azure SQL

### 1. Backend setup
```bash
cd server/PortfolioApi
dotnet restore
dotnet tool install --global dotnet-ef   # if not already installed
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
```
API will run at `https://localhost:5001` (check console output for exact port) with Swagger UI at `/swagger`.

### 2. Frontend setup
```bash
cd client
npm install
ng serve
```
App will run at `http://localhost:4200`.

Make sure `src/environments/environment.ts` points `apiUrl` to your running API.

## Deployment
See `DEPLOYMENT.md` for step-by-step instructions to deploy:
- Frontend → GitHub Pages / Vercel / Netlify
- Backend → Azure App Service / Render
- Database → Azure SQL (free tier)

## TODO Before Going Live
- [ ] Replace seed data in `Data/PortfolioContext.cs` with your real experience/skills/projects
- [ ] Add real project entries with screenshots and live demo links
- [ ] Update GitHub/LinkedIn links in `hero.component.ts`
- [ ] Add your resume PDF to `client/src/assets/resume.pdf`
- [ ] Update `environment.prod.ts` with your deployed API URL
