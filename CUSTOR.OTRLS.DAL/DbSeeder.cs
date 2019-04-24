using System;
using System.Linq;

using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CUSTOR.OTRLS.Core
{
    public static class DbSeeder
    {
        #region Public Methods

        public static void Seed(OTRLSDbContext dbContext)
        {
            //create default Users (if there are none)

           

            //create default organization (if there are none) together with warehouse and items
            if (!dbContext.CustomerProfile.Any()) CreateUserProfiles(dbContext);
        }

        #endregion

        #region Seed Methods


        private static void CreateUserProfiles(OTRLSDbContext dbContext)
        {
            //local variables
            DateTime createdDate = new DateTime(2016, 03, 01, 12, 30, 00);
            DateTime updatedDate = DateTime.Now;

       
            EntityEntry<CustomerProfile> e = dbContext.CustomerProfile.Add(new CustomerProfile()
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
                CreatedDate = createdDate,
                UpdatedDate = updatedDate,
            });
            //persist changes to Database
            dbContext.SaveChangesAsync();
        }

        #endregion
    }
}