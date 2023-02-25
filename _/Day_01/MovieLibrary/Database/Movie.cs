using System.ComponentModel.DataAnnotations;

namespace MovieLibrary.Database
{
    public class Movie
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public double Length { get; set; }

        [Required]
        public string Genre { get; set; }
    }
}
