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
    public class DiziManager : IDiziService
    {
        IDiziDal _diziDal;
        public DiziManager(IDiziDal diziDal)
        {
            _diziDal = diziDal;
        }
        
        public List<Dizi> GetAll()
        {
            return _diziDal.GetAll();
        }

        public Dizi GetById(int id)
        {
            return _diziDal.GetById(id);
        }

        
    }
}
