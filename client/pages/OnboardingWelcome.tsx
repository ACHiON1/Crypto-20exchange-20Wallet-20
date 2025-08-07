import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OnboardingWelcomePage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Wallet className="h-8 w-8 text-blue-500" />,
      title: "Multi-Currency Wallet",
      description: "Store and manage USD, EUR, Bitcoin, and more currencies in one secure place."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Bank-Level Security",
      description: "Your funds are protected with military-grade encryption and secure backup phrases."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Instant Transfers",
      description: "Send and receive money instantly with low fees and real-time notifications."
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      title: "Global Access",
      description: "Access your wallet anywhere in the world with just your phone or computer."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Wallet className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome to CryptoWallet</h1>
          <p className="text-xl text-gray-600 mb-8">Your gateway to the future of digital finance</p>
          
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Badge variant="secondary">Step 1 of 3</Badge>
            <span className="text-gray-400">•</span>
            <span className="text-sm text-gray-500">Welcome</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA Card */}
        <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-gray-900">Ready to Get Started?</CardTitle>
            <CardDescription className="text-lg">
              Create your secure wallet in just a few minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-gray-600">
                ✓ No personal information required<br/>
                ✓ Your keys, your crypto<br/>
                ✓ Start with any amount
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[200px]"
                  onClick={() => navigate('/onboarding/setup')}
                >
                  Create New Wallet
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[200px]"
                  onClick={() => navigate('/wallet')}
                >
                  I Already Have a Wallet
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <Shield className="h-5 w-5 text-amber-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-amber-800">Security Notice</p>
              <p className="text-amber-700">
                Your wallet will be created locally on your device. Make sure to save your backup phrase securely - 
                we cannot recover your wallet if you lose it.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className="text-sm text-gray-500">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
