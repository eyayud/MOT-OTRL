using AutoMapper;

namespace CUSTOR.OTRLS.Core.Helpers
{
   
        public class ApplicationMappingProfile:Profile
        {
            public ApplicationMappingProfile()
            {
                CreateMap<ApplicationUserProfile, ApplicationUserProfileDTO>().ReverseMap();
            }
        }
    
}