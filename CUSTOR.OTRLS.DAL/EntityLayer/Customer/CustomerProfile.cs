using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace CUSTOR.OTRLS.Core
{
    public class CustomerProfile
    {
        #region Constructor

        public CustomerProfile()
        {
        }

        #endregion

        #region Properties

        [Key] public int Id { get; set; }


        public string Tin { get; set; }

        public int? Title { get; set; }

        public string FirstName { get; set; }

        public string FirstNameEng { get; set; }

        public string FatherName { get; set; }

        public string FatherNameEng { get; set; }


        public string GrandName { get; set; }

        public string GrandNameEng { get; set; }

        public string MotherName { get; set; }

        public string MotherNameEng { get; set; }


        public DateTime BirthDate { get; set; }

        public int Gender { get; set; }

        public int Nationality { get; set; }


        public int AddressId { get; set; }
        
        public bool? IsActive { get; set; }
        public bool? IsDeleted { get; set; }

        public int IdentificationId { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        #endregion
    }
    
    public class CustomerProfileDTO
    {
        #region Constructor

        public CustomerProfileDTO()
        {
        }

        #endregion

        #region Properties

        [Key] public int Id { get; set; }


        public string Tin { get; set; }

        public int? Title { get; set; }

        public string FirstName { get; set; }

        public string FirstNameEng { get; set; }

        public string FatherName { get; set; }

        public string FatherNameEng { get; set; }


        public string GrandName { get; set; }

        public string GrandNameEng { get; set; }

        public string MotherName { get; set; }

        public string MotherNameEng { get; set; }


        public DateTime BirthDate { get; set; }

        public int Gender { get; set; }

        public int Nationality { get; set; }


        public int AddressId { get; set; }

        public int IdentificationId { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime UpdatedDate { get; set; }

        #endregion
    }

    public class CustomerNameProfileDTO
    {
        #region Constructor

        public CustomerNameProfileDTO()
        {
        }

        #endregion

        #region Properties

        public string FirstName { get; set; }

        public string FirstNameEng { get; set; }

        public string FatherName { get; set; }

        public string FatherNameEng { get; set; }


        public string GrandName { get; set; }

        public string GrandNameEng { get; set; }

        public string MotherName { get; set; }

        public string MotherNameEng { get; set; }

        #endregion
    }
}