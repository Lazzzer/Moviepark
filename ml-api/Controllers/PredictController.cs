using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.ML;
using ml_api.Models;

namespace ml_api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class PredictController : ControllerBase
  {

    private readonly PredictionEnginePool<ReviewModel.Input, ReviewModel.Output> _reviewPredictionEnginePool;

    public PredictController(PredictionEnginePool<ReviewModel.Input, ReviewModel.Output> reviewPredictionEnginePool)
    {
      _reviewPredictionEnginePool = reviewPredictionEnginePool;
    }

    /// <summary>
    /// Predicts sentiment of a review
    /// </summary>
    [Route("/predictReview")]
    [HttpPost]
    [ProducesResponseType(200)]
    [ProducesResponseType(400)]
    [Produces("application/json")]
    [Consumes("application/json")]
    public ActionResult<ReviewModel.Output> PredictReview([FromBody] ReviewModel.Input input)
    {
      if (!ModelState.IsValid || string.IsNullOrEmpty(input.Review)) return BadRequest();
      return Ok(_reviewPredictionEnginePool.Predict(input));
    }
  }
}
