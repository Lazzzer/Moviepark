using System.ComponentModel.DataAnnotations;
using Microsoft.ML.Data;

namespace MovieparkML.Models
{
  public partial class ReviewModel
  {
    public class Input
    {
      [Required]
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