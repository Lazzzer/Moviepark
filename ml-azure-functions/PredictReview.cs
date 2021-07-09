using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.ML;
using MovieparkML.Models;

namespace MovieparkML
{
  public class PredictReview
  {
    private readonly PredictionEnginePool<ReviewModel.Input, ReviewModel.Output> _reviewPredictionEnginePool;

    public PredictReview(PredictionEnginePool<ReviewModel.Input, ReviewModel.Output> reviewPredictionEnginePool)
    {
      _reviewPredictionEnginePool = reviewPredictionEnginePool;
    }

    [FunctionName("PredictReview")]
    public async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = "predictReview")] HttpRequest req,
        ILogger log)
    {
      string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
      try
      {
        var input = JsonSerializer.Deserialize<ReviewModel.Input>(requestBody);
        bool valid = Validator.TryValidateObject(input, new ValidationContext(input), null, false);
        if (!valid)
        {
          log.LogInformation("Input validation failed.");
          return new BadRequestObjectResult(new { Error = "Invalid Request" });
        }
        log.LogInformation("Sentiment prediction created.");
        return new OkObjectResult(_reviewPredictionEnginePool.Predict(input));
      }
      catch
      {
        log.LogInformation("Request JSON structure is invalid.");
        return new BadRequestObjectResult(new { Error = "Invalid Request" });
      }
    }
  }
}
