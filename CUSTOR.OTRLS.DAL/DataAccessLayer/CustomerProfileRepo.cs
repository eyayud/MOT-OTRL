using System;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.EntityFrameworkCore;


namespace CUSTOR.OTRLS.Core
{
    public class CustomerProfileRepository
    {
        #region Private Fields

        private readonly OTRLSDbContext dbContext;
        
        private readonly IMapper mapper;

        #endregion

        #region Constructor

        public CustomerProfileRepository(OTRLSDbContext context,IMapper mapper)
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
        public async Task<CustomerProfileDTO> GetUserProfile(int id)
        {
            try
            {
                var userProfile = await dbContext.CustomerProfile.FirstOrDefaultAsync(p => p.Id == id);

                return mapper.Map<CustomerProfileDTO>(userProfile);

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }
        
        /// <summary>
        /// Retrieves the user name  from  profile with the given {id} 
        /// </summary>
        /// <returns>the user name with the given id</returns>
        public async Task<CustomerNameProfileDTO> GetUserNames(int id)
        {
            try
            {
                var userProfile = await dbContext.CustomerProfile.FirstOrDefaultAsync(p => p.Id == id);

                return mapper.Map<CustomerNameProfileDTO>(userProfile);

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
            
        }
        
        
        /// <summary>
        /// Saves the user profile with the given {id} 
        /// </summary>
        /// <returns>the user profile with the given id</returns>
        public async Task<CustomerProfileDTO> UpdateProfile(CustomerProfileDTO model)
        {
            
            // retrieve the profile to edit
            try
            {
                
                var customerProfile = await dbContext.CustomerProfile.FirstOrDefaultAsync(p => p.Id == model.Id);

                if (customerProfile == null)
                {
                    //TODO: return not found code
                }
                

                //handle the update with auto-mapper
                customerProfile =
                    mapper.Map(model,customerProfile);
                
                //properties set from server
                
                customerProfile.UpdatedDate = DateTime.Now;

                 dbContext.SaveChanges();

                 return mapper.Map<CustomerProfileDTO>(customerProfile);
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