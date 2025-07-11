import React, { useState } from "react";
import { ArrowLeft, ExternalLink, MapPin, Star, MessageCircle, Share2, Copy, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";

export const BrandProfilePage = (): JSX.Element => {
  const navigate = useNavigate();
  const { brandName } = useParams<{ brandName: string }>();
  const [activeTab, setActiveTab] = useState("Skills");

  // Demo brand data - in real app, fetch based on brandName
  const brandData = {
    name: "ROCKAGE",
    description: "Rockage: Where fashion meets fearless attitude! Celebrate individuality with our premium 100% cotton, 250gsm oversized anime tees. Bold designs like \"HONOR BOUND\" and \"GENJUTSU\" in sizes S-XXL. Wear your attitude. Rock your age!",
    tagline: "WEAR YOUR ATTITUDE, ROCK YOUR AGE",
    joinedDate: "2024-01-15",
    totalProducts: 3,
    totalSales: 105,
    location: "Mumbai, India",
    yearsOfExperience: "2 years",
    role: "Fashion Brand",
    isVerified: true,
    isLookingForWork: true,
    avatar: "https://i.postimg.cc/xTVNmCps/Dream-X-Store.png",
    superpowerSkills: [
      "Anime Fashion",
      "Premium Cotton",
      "Oversized Fit"
    ],
    projects: [
      {
        title: "Honor Bound Collection",
        description: "Premium anime-inspired oversized tees with bold graphics",
        year: "2024"
      },
      {
        title: "Genjutsu Series",
        description: "Limited edition streetwear collection",
        year: "2024"
      },
      {
        title: "Cotton Premium Line",
        description: "100% cotton 250gsm comfortable fits",
        year: "2023"
      }
    ],
    experience: [
      {
        role: "Fashion Brand Founder",
        company: "ROCKAGE",
        period: "2023 - Present",
        description: "Founded and built premium anime fashion brand"
      },
      {
        role: "Fashion Designer",
        company: "Independent",
        period: "2022 - 2023",
        description: "Specialized in streetwear and anime-inspired designs"
      }
    ]
  };

  const handleSocialClick = (platform: string) => {
    const links = {
      dribbble: "https://dribbble.com/rockage",
      twitter: "https://twitter.com/rockage",
      linkedin: "https://linkedin.com/company/rockage",
      website: "https://rockage.com",
      copy: window.location.href
    };
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(window.location.href);
    } else {
      window.open(links[platform as keyof typeof links], '_blank');
    }
  };

  const handleMessage = () => {
    console.log("Message brand");
  };

  const handleShare = () => {
    console.log("Share brand profile");
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Skills":
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Superpower Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {brandData.superpowerSkills.map((skill, index) => (
                  <div key={index} className="flex items-center bg-gray-50 rounded-lg px-4 py-3">
                    <Star className="w-5 h-5 mr-3 text-yellow-500" />
                    <span className="font-medium text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "Projects":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Featured Projects</h3>
            <div className="space-y-4">
              {brandData.projects.map((project, index) => (
                <Card key={index} className="border border-gray-200 rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-600">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      case "Experience":
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            <div className="space-y-4">
              {brandData.experience.map((exp, index) => (
                <Card key={index} className="border border-gray-200 rounded-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{exp.role}</h4>
                        <p className="text-gray-600">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-gray-600 mt-2">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
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
        <Card className="border border-gray-200 rounded-3xl overflow-hidden shadow-lg bg-white mb-8">
          <CardContent className="p-8 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffc0cb' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative">
              {/* Profile Header */}
              <div className="flex flex-col items-center text-center">
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
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-sm font-bold text-white">✓</span>
                    </div>
                  )}
                </div>

                {/* Name and Social Icons Row */}
                <div className="flex items-center justify-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                    {brandData.name}
                    {brandData.isVerified && (
                      <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">✓</span>
                      </div>
                    )}
                  </h1>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-3 mb-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleSocialClick('website')}
                    className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                  >
                    <Globe className="w-5 h-5" />
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
                    onClick={() => handleSocialClick('copy')}
                    className="w-10 h-10 rounded-full border-gray-300 hover:border-gray-400"
                  >
                    <Copy className="w-5 h-5" />
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

                {/* Status Badge */}
                {brandData.isLookingForWork && (
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full px-4 py-2 mb-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Looking for Collaborations
                  </Badge>
                )}

                {/* Location */}
                <div className="flex items-center text-gray-600 text-sm mb-8">
                  <MapPin className="w-4 h-4 mr-1" />
                  {brandData.location}
                </div>

                {/* Role and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 w-full max-w-md">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-1">Role</p>
                    <p className="text-xl font-semibold text-gray-900">{brandData.role}</p>
                  </div>
                                     <div className="text-center">
                     <p className="text-sm text-gray-600 mb-1">Experience</p>
                     <p className="text-xl font-semibold text-gray-900">{brandData.yearsOfExperience}</p>
                   </div>
                </div>

                {/* Superpower Skills Preview */}
                <div className="w-full">
                  <p className="text-sm text-gray-600 mb-3">Superpower Skills</p>
                  <div className="flex flex-wrap gap-3 justify-center">
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
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-full p-1">
            {["Skills", "Projects", "Experience"].map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                } rounded-full px-6 py-2 text-sm font-medium transition-all`}
                variant="ghost"
              >
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};