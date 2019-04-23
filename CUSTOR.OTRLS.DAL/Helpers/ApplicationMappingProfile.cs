using AutoMapper;

namespace CUSTOR.OTRLS.Core.Helpers
{
   
        public class ApplicationMappingProfile:Profile
        {
            public ApplicationMappingProfile()
            {
                CreateMap<CustomerProfile, CustomerProfileDTO>().ReverseMap();
                CreateMap<CustomerProfile, CustomerNameProfileResponseDTO>().ReverseMap();
            }
        }
    
}