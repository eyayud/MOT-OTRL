using System;
using System.Collections.Generic;
using System.IO;
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
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Swashbuckle.AspNetCore.Swagger;

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
            services.AddScoped<RegistrationRepository>();
            services.AddScoped<RegistrationCatagoryRepository>();
            services.AddScoped<MajorDivisionRepository>();
            services.AddScoped<LegalStatusRepository>();

            services.AddScoped<DivisionRepository>();
            services.AddScoped<GroupRepository>();
            services.AddScoped<MajorGroupRepository>();
            services.AddScoped<SubGroupRepository>();
            services.AddScoped<BusinessRepository>();
            
            
            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo() {Title = "OTRL API", Version = "v1"});
                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                     /*Enable middleware to serve generated Swagger as a JSON endpoint.*/
                    app.UseSwagger();

                // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
                // specifying the Swagger JSON endpoint.
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "OTRL-API");
                });

            }

            
            
            //Configure Cors
            app.UseCors("CorsPolicy");
            app.UseMvc();
            app.UseDefaultFiles();
            app.UseStaticFiles();

           
            Initialize(app.ApplicationServices);
        }
        
        //create a service scope to get an ApplicationDbContext instance using DI
        private static async void Initialize(IServiceProvider service)
        {
            using (var serviceScope = service.CreateScope())
            {

                var scopeServiceProvider = serviceScope.ServiceProvider;
                var db = scopeServiceProvider.GetService<OTRLSDbContext>();
                /*db.Database.Migrate();
                await DbSeeder.Seed(db);*/
            }
        }
    }
}

