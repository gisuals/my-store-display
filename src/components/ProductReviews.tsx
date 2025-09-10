import { Star, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const reviews = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "SJ",
    rating: 5,
    date: "2 weeks ago",
    title: "Outstanding audio quality!",
    content: "These headphones exceeded my expectations. The noise cancellation is incredible and the sound quality is pristine. Perfect for both work and music.",
    helpful: 24,
    verified: true,
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "MC",
    rating: 5,
    date: "1 month ago",
    title: "Best purchase this year",
    content: "Amazing build quality and comfort. I can wear these for hours without any discomfort. The battery life is also impressive.",
    helpful: 18,
    verified: true,
  },
  {
    id: 3,
    author: "Emma Davis",
    avatar: "ED",
    rating: 4,
    date: "3 weeks ago",
    title: "Great for travel",
    content: "Perfect for flights and commuting. The noise cancellation makes a huge difference. Only wish the case was a bit smaller.",
    helpful: 12,
    verified: true,
  },
];

const ratingDistribution = [
  { stars: 5, count: 1847, percentage: 85 },
  { stars: 4, count: 234, percentage: 11 },
  { stars: 3, count: 67, percentage: 3 },
  { stars: 2, count: 23, percentage: 1 },
  { stars: 1, count: 11, percentage: 0 },
];

export const ProductReviews = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <Button variant="outline">Write a Review</Button>
      </div>

      {/* Rating Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold">4.9</div>
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground">Based on 2,847 reviews</p>
          </div>
        </div>

        <div className="space-y-3">
          {ratingDistribution.map((rating) => (
            <div key={rating.stars} className="flex items-center space-x-3">
              <span className="text-sm w-8">{rating.stars}★</span>
              <Progress value={rating.percentage} className="flex-1 h-2" />
              <span className="text-sm text-muted-foreground w-12">{rating.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id} className="p-6 space-y-4 elegant-shadow hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${review.author}`} />
                  <AvatarFallback>{review.avatar}</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold">{review.author}</h4>
                    {review.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < review.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="font-medium">{review.title}</h5>
              <p className="text-muted-foreground">{review.content}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Helpful ({review.helpful})
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button variant="outline" size="lg">
          Load More Reviews
        </Button>
      </div>
    </div>
  );
};