import { Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const relatedProducts = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 149,
    originalPrice: 199,
    rating: 4.8,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop",
    badge: "New",
  },
  {
    id: 2,
    name: "Gaming Headset Elite",
    price: 199,
    originalPrice: null,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=400&h=400&fit=crop",
    badge: null,
  },
  {
    id: 3,
    name: "Studio Monitor Headphones",
    price: 399,
    originalPrice: 499,
    rating: 4.7,
    reviews: 890,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop",
    badge: "Pro",
  },
  {
    id: 4,
    name: "Portable Speaker Max",
    price: 299,
    originalPrice: null,
    rating: 4.6,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    badge: null,
  },
];

export const RelatedProducts = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">You Might Also Like</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden elegant-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative aspect-square overflow-hidden bg-gradient-subtle">
              {product.badge && (
                <Badge className="absolute top-3 left-3 z-10 bg-gradient-accent">
                  {product.badge}
                </Badge>
              )}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-3 right-3 z-10 glass-card opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4 space-y-3">
              <div className="space-y-2">
                <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-baseline space-x-2">
                  <span className="font-bold text-lg">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              <Button className="w-full bg-gradient-primary hover:opacity-90" size="sm">
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};