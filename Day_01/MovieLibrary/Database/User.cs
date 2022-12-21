﻿using System.ComponentModel.DataAnnotations;

namespace MovieLibrary.Database
{
    public class User
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
