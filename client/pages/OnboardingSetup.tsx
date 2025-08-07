import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  ArrowLeft,
  ArrowRight,
  Wallet,
  User,
  Lock,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingSetupPage() {
  const navigate = useNavigate();
  const [walletName, setWalletName] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!walletName.trim()) {
      newErrors.walletName = "Wallet name is required";
    } else if (walletName.length < 3) {
      newErrors.walletName = "Wallet name must be at least 3 characters";
    }

    if (!pin) {
      newErrors.pin = "PIN is required";
    } else if (pin.length !== 6) {
      newErrors.pin = "PIN must be exactly 6 digits";
    } else if (!/^\d+$/.test(pin)) {
      newErrors.pin = "PIN must contain only numbers";
    }

    if (!confirmPin) {
      newErrors.confirmPin = "Please confirm your PIN";
    } else if (pin !== confirmPin) {
      newErrors.confirmPin = "PINs do not match";
    }

    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      // Store wallet setup data (in real app, this would go to secure storage)
      const walletData = {
        name: walletName,
        pin: pin, // In real app, this should be hashed
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem("walletSetup", JSON.stringify(walletData));
      navigate("/onboarding/security");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => navigate("/onboarding/welcome")}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="secondary">Step 2 of 3</Badge>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">Wallet Setup</span>
              </div>
            </div>
            <div className="w-10 h-10" /> {/* Spacer */}
          </div>

          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Wallet className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Set Up Your Wallet
          </h1>
          <p className="text-gray-600 mb-8">
            Customize your wallet and secure it with a PIN
          </p>
        </div>

        {/* Setup Form */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>Wallet Information</span>
            </CardTitle>
            <CardDescription>
              Give your wallet a name and set up security
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Wallet Name */}
            <div className="space-y-2">
              <Label htmlFor="walletName">Wallet Name</Label>
              <Input
                id="walletName"
                placeholder="e.g., My Main Wallet"
                value={walletName}
                onChange={(e) => setWalletName(e.target.value)}
                className={errors.walletName ? "border-red-500" : ""}
              />
              {errors.walletName && (
                <p className="text-sm text-red-500">{errors.walletName}</p>
              )}
              <p className="text-sm text-gray-500">
                This name will help you identify your wallet
              </p>
            </div>

            <Separator />

            {/* Security Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Lock className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold">Security Setup</h3>
              </div>

              {/* PIN Setup */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pin">Create 6-Digit PIN</Label>
                  <Input
                    id="pin"
                    type="password"
                    placeholder="••••••"
                    maxLength={6}
                    value={pin}
                    onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                    className={errors.pin ? "border-red-500" : ""}
                  />
                  {errors.pin && (
                    <p className="text-sm text-red-500">{errors.pin}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPin">Confirm PIN</Label>
                  <Input
                    id="confirmPin"
                    type="password"
                    placeholder="••••••"
                    maxLength={6}
                    value={confirmPin}
                    onChange={(e) =>
                      setConfirmPin(e.target.value.replace(/\D/g, ""))
                    }
                    className={errors.confirmPin ? "border-red-500" : ""}
                  />
                  {errors.confirmPin && (
                    <p className="text-sm text-red-500">{errors.confirmPin}</p>
                  )}
                </div>
              </div>

              {/* Security Notice */}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Your PIN will be required to access your wallet and authorize
                  transactions. Choose a PIN that's secure but memorable.
                </AlertDescription>
              </Alert>
            </div>

            <Separator />

            {/* Terms Agreement */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked) =>
                    setAgreedToTerms(checked as boolean)
                  }
                  className={errors.terms ? "border-red-500" : ""}
                />
                <div className="text-sm">
                  <label htmlFor="terms" className="font-medium cursor-pointer">
                    I agree to the Terms of Service and Privacy Policy
                  </label>
                  <p className="text-gray-500 mt-1">
                    By checking this box, you acknowledge that you have read and
                    agree to our
                    <a href="#" className="text-blue-600 hover:underline ml-1">
                      Terms of Service
                    </a>{" "}
                    and
                    <a href="#" className="text-blue-600 hover:underline ml-1">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-500">{errors.terms}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => navigate("/onboarding/welcome")}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button className="flex-1" onClick={handleContinue}>
                Continue to Security
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Progress Indicator */}
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>2 of 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              style={{ width: "66%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
