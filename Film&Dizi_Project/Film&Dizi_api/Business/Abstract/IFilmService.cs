using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IFilmService
    {
        List<Film> GetAll();
        Film GetById(int id);
        
        void Add(Film film);
        void Delete(Film film);

    }
}
