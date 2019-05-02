using System;
using System.Linq;

using System.Threading.Tasks;

using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CUSTOR.OTRLS.Core
{
    public static class DbSeeder
    {
        
        
        
        #region Public Methods

        public static async Task Seed(OTRLSDbContext dbContext)
        {
            //create default Users (if there are none)

           

            //create default customer profile (if there are none) 
            if (!dbContext.CustomerProfile.Any()) await CreateUserProfiles(dbContext);
        }

        #endregion

        #region Seed Methods


        private static async Task CreateUserProfiles(OTRLSDbContext dbContext)
        {
            //local variables
            var createdDate = new DateTime(2016, 03, 01, 12, 30, 00);
            var updatedDate = DateTime.Now;

       
            var e = dbContext.CustomerProfile.Add(new CustomerProfile()
            {
               
                Tin = "524354254",
                Gender = 2,
                FirstName = "ፈቲሀ",
                FirstNameEng = "Fetiha",
                FatherName = "ከድር",
                FatherNameEng = "Kedir",
                GrandName = "ሁሴን",
                GrandNameEng = "Hussien",
                MotherName = "አሚና",
                MotherNameEng = "Amina",
                Nationality = 49,
                AddressId = 1,
                IsActive = true,
                IsDeleted = false,
                CreatedDate = createdDate,
                UpdatedDate = updatedDate,
            });
            //persist changes to Database
            await  dbContext.SaveChangesAsync();
        }

        #endregion
    }
}