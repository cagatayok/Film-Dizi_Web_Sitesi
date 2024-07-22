using Business.Abstract;
using Business.Concrete;
using DataAccess.Concrete.EntityFramework;
using Entities.Concrete;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Proje.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StajController : ControllerBase
    {
        FilmManager filmManager = new FilmManager(new EfFilmDal());
        [HttpGet]
        public List<Film> GetFilm()
        {
            return filmManager.GetAll();
        }
        [HttpGet("{id}")]
        public Film GetFilmById(int id)
        {
            return filmManager.GetById(id);
        }

        DiziManager diziManager = new DiziManager(new EfDiziDal());

        [HttpGet("diziler")]
        public List<Dizi> GetDizi()
        {
            return diziManager.GetAll();
        }
        [HttpGet("diziler/{id}")]

        public Dizi GetDiziById(int id)
        {
            return diziManager.GetById(id);
        }

        [HttpPost]

        public ActionResult Add(Film film)
        {
            filmManager.Add(film);
            return Ok(film);
        }
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            filmManager.Delete(new Film() {FilmId=id });
            return Ok();
        }





        // film ekleme end-point
        // film dal |IFormFile|
        // file upload
        // film url <- upload path
        // save
        // return
    } 
}
