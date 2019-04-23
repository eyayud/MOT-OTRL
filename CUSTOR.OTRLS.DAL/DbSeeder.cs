using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CUSTOR.OTRLS.Core
{
    public static class DbSeeder
    {
        #region Public Methods

        public static void Seed(OTRLSDbContext dbContext, RoleManager<IdentityRole<int>> roleManger,
            UserManager<ApplicationUser> userManger)
        {
            //create default Users (if there are none)

            if (!dbContext.Users.Any())
            {
                CreatUsers(dbContext, roleManger, userManger)
                    .GetAwaiter()
                    .GetResult();
            }

            //create default organization (if there are none) together with warehouse and items
            if (!dbContext.UserProfiles.Any()) CreateUserProfiles(dbContext);
        }

        #endregion

        #region Seed Methods


        private static async Task CreatUsers(OTRLSDbContext dbContext, RoleManager<IdentityRole<int>> roleManager,
            UserManager<ApplicationUser> userManager)
        {
            //local variable
            var createdDate = new DateTime(2018, 05, 01, 12, 30, 00);
            var updatedDate = createdDate;

            const string roleAdministrator = "Administrator";
            const string roleRegisteredUser = "RegisteredUser";

            //Create roles if they don't exist
            if (!await roleManager.RoleExistsAsync(roleAdministrator))
            {
                await roleManager.CreateAsync(new IdentityRole<int>(roleAdministrator));
            }

            if (!await roleManager.RoleExistsAsync(roleRegisteredUser))
            {
                await roleManager.CreateAsync(new IdentityRole<int>(roleRegisteredUser));
            }

            //create the admin application user account 

            var userAdmin = new ApplicationUser()
            {
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "Admin",
                Email = "admin@testmakerfree.com",
                CreatedDate = createdDate,
                UpdatedDate = updatedDate
            };

            //Insert the admin user into the database and assign the "Administrator" and "RegisteredUser" roles to him.
            dbContext.Users.Add(userAdmin);

#if DEBUG
            //Create some sample registered user accounts(if they don't exit already)

            var userEyayu = new ApplicationUser()
            {
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "Eyayu",
                Email = "eyayu@gmail.com",
                CreatedDate = createdDate,
                UpdatedDate = updatedDate
            };

            var userFethia = new ApplicationUser()
            {
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "Fethia",
                Email = "fethia@gmail.com",
                CreatedDate = createdDate,
                UpdatedDate = updatedDate
            };

            var userAddis = new ApplicationUser()
            {
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = "Addis",
                Email = "addis@gmail.com",
                CreatedDate = createdDate,
                UpdatedDate = updatedDate
            };

            //Insert sample registered users into the database and aso assign the "registered" role to him
            if (await userManager.FindByNameAsync(userAdmin.UserName) == null)
            {
                await userManager.CreateAsync(userAdmin, "Pass4Admin");
                await userManager.AddToRoleAsync(userAdmin, roleRegisteredUser);
                //remove lockout and email confirmation
                userEyayu.EmailConfirmed = true;
                userEyayu.LockoutEnabled = false;
            }

            if (await userManager.FindByNameAsync(userEyayu.UserName) == null)
            {
                await userManager.CreateAsync(userEyayu, "Pass4Eyayu");
                await userManager.AddToRoleAsync(userEyayu, roleRegisteredUser);
                //remove lockout and email confirmation
                userEyayu.EmailConfirmed = true;
                userEyayu.LockoutEnabled = false;
            }

            if (await userManager.FindByNameAsync(userFethia.UserName) == null)
            {
                await userManager.CreateAsync(userFethia, "Pass4Fethia");
                await userManager.AddToRoleAsync(userFethia, roleRegisteredUser);
                //remove lockout and email confirmation
                userEyayu.EmailConfirmed = true;
                userEyayu.LockoutEnabled = false;
            }

            if (await userManager.FindByNameAsync(userAddis.UserName) == null)
            {
                await userManager.CreateAsync(userAddis, "Pass4Addis");
                await userManager.AddToRoleAsync(userAddis, roleRegisteredUser);
                //remove lockout and email confirmation
                userEyayu.EmailConfirmed = true;
                userEyayu.LockoutEnabled = false;
            }

            dbContext.Users.AddRange(userAddis, userAdmin, userEyayu, userFethia);

#endif
            dbContext.SaveChanges();
        }

        private static void CreateUserProfiles(OTRLSDbContext dbContext)
        {
            //local variables
            DateTime createdDate = new DateTime(2016, 03, 01, 12, 30, 00);
            DateTime ipdatedDate = DateTime.Now;

            //retrieve a user for default author
            var authorId = dbContext.Users
                .FirstOrDefault(u => u.UserName == "Fethia").Id;
            //lets firs create address kebele region woreda and zone
            var region = dbContext.Region.Add(new Region()
            {
                RegionId = "01",
                Description = "ትግራይ",
                DescriptionEnglish = "Tigray",
                IsActive = true
            });
            var zone = dbContext.Zone.Add(new Zone()
            {
                ZoneId = "1",
                RegionId = region.Entity.RegionId,
                Description = "ሰሜን ምዕራብ ትግራይ",
                DescriptionEnglish = "NORTH WEST TIGRAY"
            });

            var woreda = dbContext.Woreda.Add(new Woreda()
            {
                WoredaId = "1",
                ZoneId = zone.Entity.ZoneId,
                Description = "አንጾክያና ገምዛ",
                DescriptionEnglish = "ANTSOKIYANA GEMZA"
            });
            var kebele = dbContext.Kebele.Add(new Kebele()
            {
                KebeleId = "1",
                WoredaId = woreda.Entity.WoredaId,
                Description = "ቀበሌ 10",
                DescriptionEnglish = "kebele 10"
            });

            EntityEntry<Address> address = dbContext.Address.Add(new Address()
            {
                AddressId = 1,
                AddressType = 1,
                ParentId = authorId,
                Fax = "2435243",
                ZoneId = zone.Entity.ZoneId,
                WoredaId = woreda.Entity.WoredaId,
                KebeleId = kebele.Entity.KebeleId,
                RegionId = region.Entity.RegionId,
                Email = "testing@gmail.com",
                HouseNo = "2454",
                Pobox = "4545",
                CreatedDate = createdDate,
                UpdatedDate = ipdatedDate,

                IsActive = true
            });
            EntityEntry<ApplicationUserProfile> e = dbContext.UserProfiles.Add(new ApplicationUserProfile()
            {
                UserId = authorId,
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
                AddressId = address.Entity.AddressId,
                CreatedDate = createdDate,
                UpdatedDate = ipdatedDate,
            });
            //persist changes to Database
            dbContext.SaveChangesAsync();
        }

        #endregion
    }
}