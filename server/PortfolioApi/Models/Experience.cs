namespace PortfolioApi.Models;

public class Experience
{
    public int Id { get; set; }
    public string Company { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string StartDate { get; set; } = string.Empty; // e.g. "Jan 2023"
    public string? EndDate { get; set; } // null = Present
    public string Description { get; set; } = string.Empty;
    public int DisplayOrder { get; set; }
}
