using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CUSTOR.API.ExceptionFilter;
using CUSTOR.API.ModelValidationAttribute;
using System.Reflection;
using CUSTOR.OTRLS.Core;
using CUSTOR.OTRLS.Core.Helpers;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace CUSTOR.OTRLS.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
            services.AddMvc(options =>
                {
                    options.Filters.Add(typeof(ModelValidationAttribute)); // add global modelstate filter
                })
                .AddJsonOptions(opt =>
                {
                    // Set default json serialization
                    var resolver = opt.SerializerSettings.ContractResolver;
                    opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    if (resolver != null)
                    {
                        var res = resolver as DefaultContractResolver;
                        res.NamingStrategy = null;
                    }
                });

            var connectionString = Configuration["ConnectionStrings:DefaultConnection"];
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;

            services.AddDbContext<OTRLSDbContext>(options =>
                options.UseSqlServer(connectionString, b => b.MigrationsAssembly(migrationsAssembly)));
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader()
                        .AllowCredentials());
            });


            // add auto mapper
            var config = new AutoMapper.MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new ApplicationMappingProfile());
            });
            var mapper = config.CreateMapper();
            services.AddSingleton(mapper);
            services.AddScoped<ModelValidationAttribute>();
            services.AddScoped<ApiExceptionFilter>();
            services.AddScoped<ManagerRepository>();
            services.AddScoped<LookupRepository>();
            services.AddScoped<LookUpTypeRepository>();
            services.AddScoped<RegionRepository>();
            services.AddScoped<ZoneRepository>();
            services.AddScoped<WoredaRepository>();
            services.AddScoped<KebeleRepository>();
            services.AddScoped<CustomerProfileRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            //Configure Cors
            app.UseCors("CorsPolicy");
            app.UseMvc();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            //create a service scope to get an ApplicationDbContext instance using DI
            using (var serviceScope =
                app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var dbContext =
                    serviceScope.ServiceProvider.GetService<OTRLSDbContext>();
               
                //create the db if it doesn't exist
               
                    //dbContext.Database.Migrate();
                   // DbSeeder.Seed(dbContext);
                
               
            }
        }
    }
}

