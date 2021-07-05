using System.Text.Json.Serialization;
using Microsoft.ML.Data;

namespace ml_api.Models
{
  public partial class ReviewModel
  {
    public class Input
    {
      [ColumnName(@"review")]
      public string Review { get; set; }

      [ColumnName(@"sentiment")]
      public string Sentiment { get; set; }

    }
    public class Output
    {
      [ColumnName("PredictedLabel")]
      public string Prediction { get; set; }

      public float[] Score { get; set; }
    }
  }
}