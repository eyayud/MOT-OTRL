using System.Threading.Tasks;
using CUSTOR.OTRLS.Core;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.OTRLS.API.Controllers
{
    [Route("api/[controller]")]
    public class CustomerProfileController : Controller
    {
        #region Private Properties

        private readonly CustomerProfileRepository _customerProfileRepository;

        #endregion

        #region Constructor

        public CustomerProfileController(CustomerProfileRepository customerProfileRepository)
        {
            _customerProfileRepository = customerProfileRepository;
        }

        #endregion

        #region Restful methods

        /// <summary>
        /// Get:api/customerProfile/{id}
        /// Retrieves user profile with given user id
        /// </summary>
       
        /// <returns>the user profile </returns>
        [HttpGet("{id}")]
        public async Task<CustomerProfileDTO> GetProfileByUserId(int id)
        {
            return await _customerProfileRepository.GetUserProfile(id);
        }
        
        /// <summary>
        /// Get:api/customerProfile/{id}
        /// Retrieves user profile with given user id
        /// </summary>
       
        /// <returns>the user profile </returns>
        [HttpGet("name/{id}")]
        public async Task<CustomerNameProfileDTO> GetNameFromProfileByUserId(int id)
        {
            return await _customerProfileRepository.GetUserNames(id);
        }

        
        
        /// <summary>
        /// updates customer profile
        /// <param name="model">The UserProfile containing the data to insert</param>
        /// </summary>
        /// <returns>the updated profile</returns>
        /// 
        [HttpPut]
        public async Task<ActionResult<CustomerProfileDTO>> Put([FromBody]CustomerProfileDTO model)
        {
            //return a generic HTTP status 500 (server error)
            //if the client payload is invalid
            if (model == null) return new StatusCodeResult(500);



            return await _customerProfileRepository.UpdateProfile(model);



        }

        #endregion
    }
}