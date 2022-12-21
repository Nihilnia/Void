using Microsoft.EntityFrameworkCore;

namespace MovieLibrary.Database
{
    public class MovieLibraryContext: DbContext
    {
        public MovieLibraryContext(DbContextOptions<MovieLibraryContext> options) : base(options)
        {

        }

        public DbSet<User> User { get; set; }
        public DbSet<Movie> Movies { get; set; }
    }
}
