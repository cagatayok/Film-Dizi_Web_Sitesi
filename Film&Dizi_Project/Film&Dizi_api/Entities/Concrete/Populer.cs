using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Populer : IEntity
    {
        public int PopulerId { get; set; }
        public int FilmId { get; set; }
        public int DiziId { get; set; }
    }
}
