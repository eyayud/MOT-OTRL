using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace CUSTOR.OTRLS.Core
{
    public class ApplicationUserProfileRepository
    {
        #region Private Fields

        private readonly OTRLSDbContext dbContext;
        
        private readonly IMapper mapper;

        #endregion

        #region Constructor

        public ApplicationUserProfileRepository(OTRLSDbContext context,IMapper mapper)
        {
            dbContext = context;
            this.mapper = mapper;
        }

        #endregion

        #region  methods

        /// <summary>
        /// Retrieves the user profile with the given {id} 
        /// </summary>
        /// <returns>the user profile with the given id</returns>
        public async Task<ApplicationUserProfileDTO> GetUserProfile(int userId)
        {
            try
            {
                var userProfile = await dbContext.UserProfiles.FirstOrDefaultAsync(p => p.UserId == userId);

                return mapper.Map<ApplicationUserProfileDTO>(userProfile);

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }

        #endregion
    }
}