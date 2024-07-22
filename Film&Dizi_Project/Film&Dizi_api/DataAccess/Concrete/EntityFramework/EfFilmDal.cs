using DataAccess.Abstract;
using Entities.Abstract;
using Entities.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework
{
    public class EfFilmDal : IFilmDal
    {
        public void Add(Film entity)
        {
            using (StajDbContext context =new StajDbContext())
            {
                var addedEntity = context.Entry(entity);
                addedEntity.State=EntityState.Added;
                context.SaveChanges();
            }
        }


        public void Delete(Film entity)
        {
            using (StajDbContext context = new StajDbContext())
            {
                var deletedEntity = context.Entry(entity);
                deletedEntity.State = EntityState.Deleted;
                context.SaveChanges();
            }
        }

        public Film Get(Expression<Func<Film, bool>> filter)
        {
            using (StajDbContext context = new StajDbContext())
            {
                return context.Set<Film>().SingleOrDefault(filter);
            }
        }

        public List<Film> GetAll(Expression<Func<Film, bool>> filter = null)
        {
            using (StajDbContext context = new StajDbContext())
            {
                return filter == null ? context.Set<Film>().ToList():context.Set<Film>().Where(filter).ToList();
            }
        }

        

        public void Update(Film entity)
        {
            using (StajDbContext context = new StajDbContext())
            {
                var updatedEntity = context.Entry(entity);
                updatedEntity.State = EntityState.Modified;
                context.SaveChanges();
            }
        }

        public Film GetById(int id)
        {
            using (StajDbContext context =new StajDbContext())
            {
                return context.Films.Find(id);
            }
        }

        
    }
}
