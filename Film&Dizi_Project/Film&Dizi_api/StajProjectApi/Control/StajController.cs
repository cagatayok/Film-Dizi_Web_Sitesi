
using Business.Concrete;
using DataAccess.Abstract;
using Entities.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace StajProjectApi.Control
{
    [Route("api/[controller]")]
    [ApiController]
    public class StajController : ControllerBase
    {
        private IFilmRepository _filmService;
        public StajController()
        {
            _filmService=new FilmManager();
        }

        [HttpGet]
        public List<Film> Get()
        {

        }
    }
}
