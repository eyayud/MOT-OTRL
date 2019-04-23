using System.Threading.Tasks;
using CUSTOR.OTRLS.Core;
using Microsoft.AspNetCore.Mvc;

namespace CUSTOR.OTRLS.API.Controllers
{
    [Route("api/[controller]")]
    public class ApplicationUserProfileController: Controller
    {

        #region Private Properties

        private readonly ApplicationUserProfileRepository _profileRepository;
        

        #endregion

        #region Constructor

        public ApplicationUserProfileController(ApplicationUserProfileRepository profileRepository)
        {
            _profileRepository = profileRepository;
        }

            #endregion

            [HttpGet("byUserId/{id}")]
            public async Task<ApplicationUserProfileDTO> GetProfileByUserId(int id)
            {
                return await _profileRepository.GetUserProfile(id);
            }
    }
}