import { ProductGallery } from "@/components/ProductGallery";
import { ProductInfo } from "@/components/ProductInfo";
import { ProductReviews } from "@/components/ProductReviews";
import { RelatedProducts } from "@/components/RelatedProducts";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold gradient-text">AudioShop</h1>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Products</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Categories</a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Support</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Product Page */}
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery />
          <ProductInfo />
        </div>

        <Separator />

        {/* Product Description */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Product Details</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Experience audio like never before with our Premium Wireless Headphones. 
              Featuring industry-leading noise cancellation technology, these headphones 
              deliver crystal-clear sound with deep bass and crisp highs. The comfortable 
              over-ear design ensures hours of listening pleasure, while the premium 
              materials guarantee durability and style.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Key Features</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Active Noise Cancellation</li>
                  <li>• 30-hour battery life</li>
                  <li>• Quick charge (5 min = 2 hours)</li>
                  <li>• Premium comfort materials</li>
                  <li>• Bluetooth 5.2 connectivity</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold">Specifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Driver: 40mm dynamic</li>
                  <li>• Frequency: 20Hz - 20kHz</li>
                  <li>• Weight: 250g</li>
                  <li>• Impedance: 32Ω</li>
                  <li>• Wireless range: 10m</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Reviews Section */}
        <ProductReviews />

        <Separator />

        {/* Related Products */}
        <RelatedProducts />
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 AudioShop. Premium audio equipment for everyone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
