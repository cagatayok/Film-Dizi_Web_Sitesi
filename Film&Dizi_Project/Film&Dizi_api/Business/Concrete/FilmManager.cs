using Business.Abstract;
using DataAccess.Abstract;
using DataAccess.Concrete;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class FilmManager : IFilmService
    {
        IFilmDal _filmDal;
        public FilmManager(IFilmDal filmDal)
        {
            _filmDal = filmDal;
        }

        public List<Film> GetAll()
        {
            return _filmDal.GetAll();
        }

        public Film GetById(int id)
        {
            return _filmDal.GetById(id);
        }

        public void Add(Film film)
        {
            _filmDal.Add(film);
        }

        public void Delete(Film film)
        {
            _filmDal.Delete(film);
        }
    }
}
