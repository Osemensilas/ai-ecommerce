import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oraimo Power Bank 20,000mAh",
    price: 14500,
    oldPrice: 20000,
    image: "https://via.placeholder.com/200x200.png?text=Power+Bank",
  },
  {
    id: 2,
    name: "Samsung Galaxy Buds Pro",
    price: 65000,
    oldPrice: 80000,
    image: "https://via.placeholder.com/200x200.png?text=Galaxy+Buds",
  },
  {
    id: 3,
    name: "Men's Sneakers - White",
    price: 12000,
    oldPrice: 18000,
    image: "https://via.placeholder.com/200x200.png?text=Sneakers",
  },
  {
    id: 4,
    name: "Hisense 32-Inch LED TV",
    price: 85000,
    oldPrice: 110000,
    image: "https://via.placeholder.com/200x200.png?text=Hisense+TV",
  },
  {
    id: 5,
    name: "Nivea Body Lotion 400ml",
    price: 3500,
    oldPrice: 5000,
    image: "https://via.placeholder.com/200x200.png?text=Nivea+Lotion",
  },
];

export default function SpecialOffers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ padding: "24px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        🔥 Special Offer's
      </Typography>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} style={{ padding: "8px" }}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="160"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                  {product.name}
                </Typography>
                <div style={{ display: "flex", gap: "8px", margin: "8px 0" }}>
                  <Typography variant="h6" color="green">
                    ₦{product.price.toLocaleString()}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ textDecoration: "line-through", color: "gray" }}
                  >
                    ₦{product.oldPrice.toLocaleString()}
                  </Typography>
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<ShoppingCart size={18} />}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
