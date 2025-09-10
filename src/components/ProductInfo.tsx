import { useState } from "react";
import { Star, Heart, Share2, Shield, Truck, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const colors = [
  { name: "Midnight Black", value: "black", class: "bg-gray-900" },
  { name: "Pearl White", value: "white", class: "bg-gray-100" },
  { name: "Ocean Blue", value: "blue", class: "bg-blue-600" },
];

const features = [
  { icon: Shield, text: "2 Year Warranty" },
  { icon: Truck, text: "Free Shipping" },
  { icon: RotateCcw, text: "30-Day Returns" },
];

export const ProductInfo = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} item(s) added to your cart`,
      duration: 3000,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted ? "Item removed from your wishlist" : "Item added to your wishlist",
      duration: 2000,
    });
  };

  const handleShare = () => {
    toast({
      title: "Link copied!",
      description: "Product link copied to clipboard",
      duration: 2000,
    });
  };

  return (
    <div className="space-y-6">
      {/* Product Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-gradient-accent text-accent-foreground">
              Best Seller
            </Badge>
            <h1 className="text-3xl font-bold gradient-text">
              Premium Wireless Headphones
            </h1>
            <p className="text-muted-foreground text-lg">
              Professional-grade audio with industry-leading noise cancellation
            </p>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleWishlist}
              className={cn(
                "transition-colors",
                isWishlisted && "text-red-500 bg-red-50 border-red-200"
              )}
            >
              <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
            </Button>
            <Button variant="outline" size="icon" onClick={handleShare}>
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(4.9) • 2,847 reviews</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline space-x-3">
          <span className="text-3xl font-bold">$299</span>
          <span className="text-lg text-muted-foreground line-through">$399</span>
          <Badge variant="destructive">25% OFF</Badge>
        </div>
      </div>

      <Separator />

      {/* Color Selection */}
      <div className="space-y-4">
        <h3 className="font-semibold">Color</h3>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.value}
              className={cn(
                "flex items-center space-x-3 rounded-lg border-2 p-3 transition-all",
                selectedColor === color.value
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground"
              )}
              onClick={() => setSelectedColor(color.value)}
            >
              <div className={cn("h-6 w-6 rounded-full border-2 border-white", color.class)} />
              <span className="text-sm font-medium">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-4">
        <h3 className="font-semibold">Quantity</h3>
        <div className="flex items-center space-x-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </Button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="space-y-3">
        <Button 
          className="w-full bg-gradient-primary hover:opacity-90 glow-shadow" 
          size="lg"
          onClick={handleAddToCart}
        >
          Add to Cart - $299
        </Button>
        <Button variant="outline" className="w-full" size="lg">
          Buy Now
        </Button>
      </div>

      <Separator />

      {/* Features */}
      <div className="space-y-4">
        <h3 className="font-semibold">What's Included</h3>
        <div className="grid grid-cols-1 gap-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <feature.icon className="h-5 w-5 text-primary" />
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};