using Entities.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Concrete
{
    public class Dizi : IEntity
    {
        public int DiziId { get; set; }
        public string Url { get; set; }
        public string Baslik { get; set; }
        public string Aciklama { get; set; }
        public int YayinYil { get; set; }
        public string Yonetmen { get; set; }
        public string Oyuncular { get; set; }
        public int Imdb { get; set; }
    }
}
