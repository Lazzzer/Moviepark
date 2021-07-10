using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Microsoft.Extensions.ML;
using ml_api.Models;

namespace ml_api
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddPredictionEnginePool<ReviewModel.Input, ReviewModel.Output>()
              .FromUri(uri: "https://github.com/Lazzzer/Moviepark/raw/v2/ml-api/MLModels/ReviewModel.zip",
                       period: System.TimeSpan.FromHours(1));

      services.AddCors(options =>
     {
       options.AddPolicy(name: "AllowedOrigins",
         builder =>
         {
           builder.WithOrigins(Configuration["ASPNETCORE_ALLOWED_ORIGIN"])
                  .AllowAnyHeader()
                  .AllowAnyMethod();
         });
     });
      services.AddControllers();
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo { Title = "Moviepark ML Classifier API v1", Version = "v1" });
      });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
        app.UseSwagger();
        app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Moviepark ML Classifier API v1"));
      }

      app.UseCors("AllowedOrigins");

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
