using System;
using System.ComponentModel;
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

        [MaxLength(30)] public string FirstName { get; set; }
        
        [MaxLength(30)] public string FirstNameEng { get; set; }
        
        [MaxLength(30)] public string FirstNameRegion { get; set; }
        
        [MaxLength(30)] public string FatherName { get; set; }
        
        [MaxLength(30)] public string FatherNameEng { get; set; }
        
        [MaxLength(30)] public string FatherNameRegion { get; set; }
        [MaxLength(30)] public string GrandName { get; set; }
        [MaxLength(30)] public string GrandNameEng { get; set; }
        
        [MaxLength(30)] public string GrandNameRegion { get; set; }
        [MaxLength(30)] public string MotherName { get; set; }
        [MaxLength(30)] public string MotherNameEng { get; set; }
        
        [MaxLength(30)] public string MotherNameRegion { get; set; }

        public DateTime BirthDate { get; set; }

        public int Gender { get; set; }

        public int Nationality { get; set; }

        public int AddressId { get; set; }
        
        [DefaultValue(true)] public bool? IsActive { get; set; }

        [DefaultValue(false)] public bool? IsDeleted { get; set; }

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
        
        public string FirstNameRegion { get; set; }

        public string FatherName { get; set; }

        public string FatherNameEng { get; set; }
        
        public string FatherNameRegion { get; set; }

        public string GrandName { get; set; }

        public string GrandNameEng { get; set; }
        
        public string GrandNameRegion { get; set; }

        public string MotherName { get; set; }

        public string MotherNameEng { get; set; }
        
        public string MotherNameRegion { get; set; }

        #endregion
    }
}