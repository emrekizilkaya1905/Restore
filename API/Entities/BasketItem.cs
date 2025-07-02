using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities;

[Table("BasketItems")]
public class BasketItem
{
  public int Id { get; set; }
  public int Quantity { get; set; }

  //navigation properties
  public int ProductId { get; set; }
  public required Product Product { get; set; }

  // Define fully navigation property
  public int BasketId { get; set; }
  public Basket Basket { get; set; } = null!;
}