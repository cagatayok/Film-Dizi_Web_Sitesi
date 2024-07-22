using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IDiziService
    {
        List<Dizi> GetAll();
        Dizi GetById(int id);
       
    }
}
