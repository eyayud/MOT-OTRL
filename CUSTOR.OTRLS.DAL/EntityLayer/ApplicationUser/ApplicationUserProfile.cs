using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace CUSTOR.OTRLS.Core
{
    public class ApplicationUserProfile
    {
        #region Constructor

        public ApplicationUserProfile()
        {
        }

        #endregion

        #region Properties

        [Key] public int Id { get; set; }

        [Required] public int UserId { get; set; }

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
        
        public  DateTime CreatedDate { get; set; }
        
        public  DateTime UpdatedDate { get; set; }

        #endregion
        
        
        #region
        ///<summary>
        ///User will be loaded using EF Lazy-Loading feature.
        /// </summary>

        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }

        #endregion
       

        
        
    }

    public class ApplicationUserProfileDTO
    {
        #region Constructor

        public ApplicationUserProfileDTO(){}

        #endregion

        #region Properties
        public string Tin { get; set; }

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