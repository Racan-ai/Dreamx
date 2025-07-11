import React from "react";
import { ArrowLeft, ExternalLink, MapPin, Star, MessageCircle, Share2 } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";

export const BrandProfilePage = (): JSX.Element => {
  const navigate = useNavigate();
  const { brandName } = useParams<{ brandName: string }>();

  // Demo brand data - in real app, fetch based on brandName
  const brandData = {
    name: "ROCKAGE",
    description: "Rockage: Where fashion meets fearless attitude! Celebrate individuality with our premium 100% cotton, 250gsm oversized anime tees. Bold designs like \"HONOR BOUND\" and \"GENJUTSU\" in sizes S-XXL. Wear your attitude. Rock your age!",
    tagline: "WEAR YOUR ATTITUDE, ROCK YOUR AGE",
    joinedDate: "2024-01-15",
    totalProducts: 3,
    totalSales: 105,
    location: "Mumbai, India",
    experience: "2 years",
    role: "Fashion Brand",
    isVerified: true,
    isLookingForWork: true,
    avatar: "https://i.postimg.cc/xTVNmCps/Dream-X-Store.png",
    superpowerSkills: [
      "Anime Fashion",
      "Premium Cotton",
      "Oversized Fit"
    ],
    products: [
      {
        id: 1,
        name: "Oversized t shirt",
        price: 699,
        originalPrice: 1399,
        image: "https://i.postimg.cc/fRWRqwYP/GPT-model.png",
        slug: "oversized-t-shirt"
      },
      {
        id: 2,
        name: "Honor Bound Tee",
        price: 799,
        originalPrice: 1299,
        image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        slug: "honor-bound-tee"
      },
      {
        id: 3,
        name: "Genjutsu Design",
        price: 899,
        originalPrice: 1499,
        image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
        slug: "genjutsu-design"
      }
    ]
  };

  const handleProductClick = (slug: string) => {
    navigate(`/product/${slug}`);
  };

  const handleSocialClick = (platform: string) => {
    const links = {
      dribbble: "https://dribbble.com/rockage",
      twitter: "https://twitter.com/rockage",
      linkedin: "https://linkedin.com/company/rockage",
      website: "https://rockage.com"
    };
    window.open(links[platform as keyof typeof links], '_blank');
  };

  const handleMessage = () => {
    // Handle message functionality
    console.log("Message brand");
  };

  const handleShare = () => {
    // Handle share functionality
    console.log("Share brand profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="h-10 w-10 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          
          <h1 className="text-lg font-medium">{brandData.name}</h1>
          
          <div className="w-10" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Card */}
        <Card className="border-2 border-black rounded-3xl overflow-hidden shadow-lg bg-white mb-8">
          <CardContent className="p-8 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc0cb' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative">
              {/* Profile Header */}
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Left Side - Avatar and Status */}
                <div className="flex flex-col items-center lg:items-start">
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={brandData.avatar}
                        alt={brandData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {brandData.isVerified && (
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                        <span className="text-sm">✓</span>
                      </div>
                    )}
                  </div>

                  {/* Status Badge */}
                  {brandData.isLookingForWork && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full px-4 py-2 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Looking for Collaborations
                    </Badge>
                  )}

                  {/* Location */}
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {brandData.location}
                  </div>
                </div>

                {/* Right Side - Brand Info */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Name and Social Icons */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center lg:justify-start gap-2">
                        {brandData.name}
                        {brandData.isVerified && (
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">✓</span>
                          </div>
                        )}
                      </h1>
                    </div>
                    
                    {/* Social Media Icons */}
                    <div className="flex items-center gap-3 justify-center lg:justify-end">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('dribbble')}
                        className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-2.832-.456-5.337-.456-.671 0-1.301.05-1.884.144-.188-.434-.39-.857-.608-1.25 2.7-1.1 4.6-2.8 5.556-4.136zM12 2.147c2.602 0 4.983.881 6.889 2.347-.819 1.2-2.4 2.7-4.8 3.7-1.2-2.2-2.5-4-4.089-5.4.65-.4 1.35-.647 2-.647zm-2.042.562c1.5 1.4 2.8 3.1 4 5.2-2.6.8-5.5 1.2-8.4 1.2-.4 0-.8 0-1.2-.05.8-2.8 2.9-5.1 5.6-6.35zm-6.4 7.8c.4.05.8.05 1.2.05 3.2 0 6.4-.5 9.2-1.4.2.4.4.8.5 1.2-3.1.9-5.7 3.1-7.2 6.1-1.6-1.1-2.8-2.8-3.7-4.9zm5.4 8.9c1.2-2.6 3.4-4.6 6.1-5.4.7 1.9 1.1 4 1.2 6.2-2.2.9-4.7.9-7.3-.8zm9.5-1.1c-.1-1.9-.4-3.7-1-5.4 2.2.1 4.2.4 5.9.8-.4 2.1-1.6 3.9-3.2 5.2-.6-.4-1.1-.8-1.7-1.6z"/>
                        </svg>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('twitter')}
                        className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('linkedin')}
                        className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleSocialClick('website')}
                        className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Button>

                      <Button
                        onClick={handleMessage}
                        className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-medium"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message
                      </Button>

                      <Button
                        onClick={handleShare}
                        className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm font-medium"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>

                  {/* Role and Experience */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Role</p>
                      <p className="text-xl font-semibold text-gray-900">{brandData.role}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Experience</p>
                      <p className="text-xl font-semibold text-gray-900">{brandData.experience}</p>
                    </div>
                  </div>

                  {/* Superpower Skills */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-3">Superpower Skills</p>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                      {brandData.superpowerSkills.map((skill, index) => (
                        <div key={index} className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                          <Star className="w-4 h-4 mr-2 text-yellow-500" />
                          <span className="text-sm font-medium text-gray-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-full p-1">
            <Button className="bg-white text-black shadow-sm rounded-full px-6 py-2 text-sm font-medium">
              Skills
            </Button>
            <Button variant="ghost" className="text-gray-600 rounded-full px-6 py-2 text-sm font-medium">
              Projects
            </Button>
            <Button variant="ghost" className="text-gray-600 rounded-full px-6 py-2 text-sm font-medium">
              Experience
            </Button>
          </div>
        </div>

        {/* Products Section */}
        <section className="py-16 bg-white text-black">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Our Latest Collection
              </h2>
              <p className="text-lg text-gray-600">
                Discover our premium designs crafted with passion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brandData.products.map((product) => (
                <Card 
                  key={product.id}
                  className="border border-gray-200 rounded-[1px] overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleProductClick(product.slug)}
                >
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* Product Image */}
                      <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Cart Button */}
                      <Button
                        size="icon"
                        className="absolute bottom-4 right-4 w-12 h-12 bg-white hover:bg-gray-100 text-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle add to cart
                        }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </Button>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-gray-900">
                          ₹{product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Stats */}
        <section className="py-16 bg-gray-900 rounded-3xl mt-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-4xl font-bold text-white">{brandData.totalProducts}</p>
                <p className="text-gray-400">Products</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-white">{brandData.totalSales}+</p>
                <p className="text-gray-400">Happy Customers</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-bold text-white">2024</p>
                <p className="text-gray-400">Established</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-16 bg-black rounded-3xl mt-8">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Rock Your Style?
            </h2>
            <p className="text-lg text-gray-400">
              Join thousands of customers who trust {brandData.name} for premium fashion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/dashboard')}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-[1px] text-lg font-medium"
              >
                Shop Now
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-[1px] text-lg font-medium"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Visit Store
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};