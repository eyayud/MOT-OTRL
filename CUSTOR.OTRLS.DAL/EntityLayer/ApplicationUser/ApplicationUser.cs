using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;


namespace CUSTOR.OTRLS.Core
{
    public class ApplicationUser:IdentityUser<int>
    {
        #region Constructor

        public ApplicationUser()
        {
        }

        #endregion

        #region Properties

       
        [Required] public int Flags { get; set; }
        
        [Required] public  DateTime CreatedDate { get; set; }
       
        [Required] public DateTime UpdatedDate { get; set; }
        #endregion
        
        public virtual ApplicationUserProfile ApplicationUserProfile { get; set; }
    }
}