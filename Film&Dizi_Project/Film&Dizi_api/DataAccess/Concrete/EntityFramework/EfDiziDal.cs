using DataAccess.Abstract;
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
    public class EfDiziDal : IDiziDal
    {

        public void Add(Dizi entity)
        {
            using (StajDbContext context = new StajDbContext())
            {
                var addedEntity = context.Entry(entity);
                addedEntity.State = EntityState.Added;
                context.SaveChanges();
            }
        }


        public void Delete(Dizi entity)
        {
            using (StajDbContext context = new StajDbContext())
            {
                var deletedEntity = context.Entry(entity);
                deletedEntity.State = EntityState.Deleted;
                context.SaveChanges();
            }
        }

        public Dizi Get(Expression<Func<Dizi, bool>> filter)
        {
            using (StajDbContext context = new StajDbContext())
            {
                return context.Set<Dizi>().SingleOrDefault(filter);
            }
        }

        public List<Dizi> GetAll(Expression<Func<Dizi, bool>> filter = null)
        {
            using (StajDbContext context = new StajDbContext())
            {
                return filter == null ? context.Set<Dizi>().ToList() : context.Set<Dizi>().Where(filter).ToList();
            }
        }

        public void Update(Dizi entity)
        {
            using (StajDbContext context = new StajDbContext())
            {
                var updatedEntity = context.Entry(entity);
                updatedEntity.State = EntityState.Modified;
                context.SaveChanges();
            }
        }

        public Dizi GetById(int id)
        {
            using (StajDbContext context = new StajDbContext())
            {
                return context.Dizis.Find(id);
            }
        }
    }
}
