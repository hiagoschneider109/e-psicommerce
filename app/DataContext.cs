using Microsoft.EntityFrameworkCore;

public class DataContext : DbContext
{
    public DbSet<Category> Categories { get; set; }
    public DbSet<Item> Items { get; set; }
    public DbSet<List> Lists { get; set; }
    public DbSet<ListType> ListTypes { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<User> Users { get; set; }
}
