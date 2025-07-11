import React from "react";
import { ArrowLeft, ExternalLink, MapPin, Star } from "lucide-react";
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
    location: "Mumbai, IN",
    role: "Fashion Brand",
    experience: "1 year",
    avatar: "https://i.postimg.cc/xTVNmCps/Dream-X-Store.png",
    isLookingForWork: true,
    superpowerSkills: [
      "Anime Fashion",
      "Premium Cotton",
      "Bold Designs"
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
      website: "https://dreamxworld.com",
      twitter: "https://twitter.com/rockage_brand",
      linkedin: "https://linkedin.com/company/rockage",
      dribbble: "https://dribbble.com/rockage"
    };
    window.open(links[platform as keyof typeof links], '_blank');
  };

  const handleMessage = () => {
    window.open("https://wa.me/916301338677", "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${brandData.name} - Dream X Store`,
        text: brandData.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="h-10 w-10 rounded-[1px] hover:bg-gray-100"
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
        <Card className="border-2 border-black rounded-3xl overflow-hidden mb-8 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
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
                </div>
                
                {/* Status Badge */}
                {brandData.isLookingForWork && (
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full px-4 py-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Looking for Work
                  </Badge>
                )}

                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {brandData.location}
                </div>
              </div>

              {/* Right Side - Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                {/* Name and Verification */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <h1 className="text-3xl font-bold text-gray-900">
                        {brandData.name}
                      </h1>
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Icons */}
                  <div className="flex items-center gap-3 justify-center lg:justify-end">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleSocialClick('website')}
                      className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleSocialClick('twitter')}
                      className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleSocialClick('linkedin')}
                      className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleSocialClick('dribbble')}
                      className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.626 0 12 0zm7.568 5.302c1.4 1.5 2.252 3.5 2.273 5.698-.653-.126-1.542-.24-2.653-.24-.2 0-.402.008-.606.02-.1-.25-.2-.5-.31-.74l-.12-.28c1.164-.476 2.022-1.056 2.416-1.458zM12 2.151c2.75 0 5.25 1.1 7.07 2.88-.32.35-1.1.9-2.17 1.33-.95-1.75-2.01-3.25-2.91-4.21zm-2.13.2c.9.96 1.96 2.46 2.91 4.21-1.18.48-2.54.78-4.02.78-.56 0-1.1-.04-1.62-.1.48-1.97 1.42-3.65 2.73-4.89zm-4.7 6.4c.6.08 1.2.12 1.83.12 1.7 0 3.24-.34 4.6-.9.1.2.19.4.28.61.1.21.19.42.28.64-1.9.77-3.5 2.17-4.6 3.9-.9-1.4-1.4-3.1-1.4-4.9 0-.16.01-.31.01-.47zm1.23 6.58c.96-1.59 2.37-2.85 4.03-3.54.5 1.3.85 2.75 1.01 4.32-1.46.6-3.1.6-4.6 0-.15-.26-.29-.52-.44-.78zm6.15 3.34c-.2-1.47-.6-2.85-1.1-4.1 1.4-.2 2.9-.2 4.4.1-.4 1.8-1.4 3.4-2.8 4.6-.16-.2-.32-.4-.5-.6z"/>
                      </svg>
                    </Button>
                    <Button
                      onClick={handleMessage}
                      className="bg-black text-white hover:bg-gray-800 rounded-full px-6 py-2 text-sm"
                    >
                      Message
                    </Button>
                    <Button
                      onClick={handleShare}
                      variant="outline"
                      className="rounded-full px-6 py-2 text-sm border-gray-300 hover:border-gray-400"
                    >
                      Share
                    </Button>
                  </div>
                </div>

                {/* Role and Experience */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
                      <div key={index} className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-2">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs - Removed "My Story" */}
        <div className="flex flex-wrap gap-1 mb-8 border-b border-gray-200 bg-white/50 rounded-t-2xl p-2">
          {["Skills", "Projects", "Experience"].map((tab, index) => (
            <Button
              key={tab}
              variant="ghost"
              className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Products Section */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Our Latest Collection
            </h2>
            <p className="text-lg text-gray-600">
              Discover our premium designs crafted with passion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandData.products.map((product) => (
              <Card 
                key={product.id}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group bg-white"
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
        </section>

        {/* Brand Stats */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-gray-900">{brandData.totalProducts}</p>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-gray-900">{brandData.totalSales}+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-gray-900">2024</p>
              <p className="text-gray-600">Established</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};