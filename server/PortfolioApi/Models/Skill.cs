namespace PortfolioApi.Models;

public class Skill
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;       // e.g. "ASP.NET Core"
    public string Category { get; set; } = string.Empty;   // Backend, Frontend, Database, Tools
    public int ProficiencyLevel { get; set; }               // 1-5, optional use
}
