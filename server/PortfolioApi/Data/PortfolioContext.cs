using Microsoft.EntityFrameworkCore;
using PortfolioApi.Models;

namespace PortfolioApi.Data;

public class PortfolioContext : DbContext
{
    public PortfolioContext(DbContextOptions<PortfolioContext> options) : base(options) { }

    public DbSet<Project> Projects => Set<Project>();
    public DbSet<Experience> Experiences => Set<Experience>();
    public DbSet<Skill> Skills => Set<Skill>();
    public DbSet<ContactMessage> ContactMessages => Set<ContactMessage>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // TODO: Replace this seed data with your real resume content.
        modelBuilder.Entity<Skill>().HasData(
            new Skill { Id = 1, Name = "C# / .NET Core", Category = "Backend", ProficiencyLevel = 5 },
            new Skill { Id = 2, Name = "ASP.NET Core Web API", Category = "Backend", ProficiencyLevel = 5 },
            new Skill { Id = 3, Name = "Entity Framework Core", Category = "Backend", ProficiencyLevel = 4 },
            new Skill { Id = 4, Name = "Angular", Category = "Frontend", ProficiencyLevel = 4 },
            new Skill { Id = 5, Name = "TypeScript", Category = "Frontend", ProficiencyLevel = 4 },
            new Skill { Id = 6, Name = "SQL Server", Category = "Database", ProficiencyLevel = 5 },
            new Skill { Id = 7, Name = "Git", Category = "Tools", ProficiencyLevel = 4 }
        );

        modelBuilder.Entity<Experience>().HasData(
            new Experience
            {
                Id = 1,
                Company = "Your Company Name",
                Role = "Software Developer",
                StartDate = "2023",
                EndDate = null,
                Description = "TODO: Replace with real responsibilities and quantified achievements from your resume.",
                DisplayOrder = 1
            }
        );

        modelBuilder.Entity<Project>().HasData(
            new Project
            {
                Id = 1,
                Title = "Personal Portfolio (this project)",
                Description = "Full-stack portfolio built with Angular, ASP.NET Core Web API, and SQL Server.",
                TechStack = "Angular,.NET Core,SQL Server,EF Core",
                GithubUrl = "https://github.com/your-username/portfolio",
                DisplayOrder = 1
            }
        );
    }
}
