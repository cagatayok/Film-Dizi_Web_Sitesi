using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class StajDbContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=DESKTOP-3U9KI3T\\SQLEXPRESS; Database=StajDb;uid=sa;pwd=1;");
        }
        public DbSet<Dizi> Dizis { get; set; }
        public DbSet<Film> Films { get; set; }
        public DbSet<Kullanici> Kullanicis { get; set; }
        public DbSet<KullaniciFavoriler> KullaniciFavorilers { get; set; }
        public DbSet<Populer> Populers { get; set; }
    }
}
