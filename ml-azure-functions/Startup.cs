using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using MovieparkML;
using MovieparkML.Models;
using Microsoft.Extensions.ML;

[assembly: FunctionsStartup(typeof(Startup))]
namespace MovieparkML
{
  public class Startup : FunctionsStartup
  {
    public override void Configure(IFunctionsHostBuilder builder)
    {
      builder.Services.AddPredictionEnginePool<ReviewModel.Input, ReviewModel.Output>()
          .FromUri(uri: "https://github.com/Lazzzer/Moviepark/raw/v2/ml-api/MLModels/ReviewModel.zip",
                       period: System.TimeSpan.FromHours(1));
    }
  }
}