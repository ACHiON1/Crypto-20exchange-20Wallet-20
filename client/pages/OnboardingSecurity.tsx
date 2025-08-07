import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Shield, Copy, Eye, EyeOff, AlertTriangle, Check } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OnboardingSecurityPage() {
  const navigate = useNavigate();
  const [showPhrase, setShowPhrase] = useState(false);
  const [copiedWords, setCopiedWords] = useState<boolean[]>(new Array(12).fill(false));
  const [allWordsCopied, setAllWordsCopied] = useState(false);

  // Mock backup phrase - in real app this would be generated securely
  const backupPhrase = [
    "abandon", "ability", "able", "about", "above", "absent",
    "absorb", "abstract", "absurd", "abuse", "access", "accident"
  ];

  const copyWord = async (word: string, index: number) => {
    try {
      await navigator.clipboard.writeText(word);
      const newCopiedWords = [...copiedWords];
      newCopiedWords[index] = true;
      setCopiedWords(newCopiedWords);
      
      // Check if all words are copied
      if (newCopiedWords.every(copied => copied)) {
        setAllWordsCopied(true);
      }
    } catch (err) {
      console.error('Failed to copy word:', err);
    }
  };

  const copyFullPhrase = async () => {
    try {
      await navigator.clipboard.writeText(backupPhrase.join(' '));
      setCopiedWords(new Array(12).fill(true));
      setAllWordsCopied(true);
    } catch (err) {
      console.error('Failed to copy phrase:', err);
    }
  };

  const handleComplete = () => {
    // Store completion status
    localStorage.setItem('onboardingCompleted', 'true');
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center py-8">
          <div className="flex items-center justify-center mb-4">
            <Button variant="outline" size="icon" onClick={() => navigate('/onboarding/setup')}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1">
              <div className="flex items-center justify-center space-x-2">
                <Badge variant="secondary">Step 3 of 3</Badge>
                <span className="text-gray-400">•</span>
                <span className="text-sm text-gray-500">Security</span>
              </div>
            </div>
            <div className="w-10 h-10" />
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Secure Your Wallet</h1>
          <p className="text-gray-600 mb-8">Save your backup phrase to recover your wallet</p>
        </div>

        {/* Security Warning */}
        <Alert className="mb-6 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4 text-amber-600" />
          <AlertDescription className="text-amber-800">
            <strong>Important:</strong> Your backup phrase is the only way to recover your wallet. 
            Store it safely and never share it with anyone.
          </AlertDescription>
        </Alert>

        {/* Backup Phrase Card */}
        <Card className="border-2 mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Backup Phrase</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPhrase(!showPhrase)}
                >
                  {showPhrase ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  {showPhrase ? 'Hide' : 'Show'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={copyFullPhrase}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy All
                </Button>
              </div>
            </div>
            <CardDescription>
              Write down these 12 words in order and store them safely
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {backupPhrase.map((word, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-500 w-6">
                        {index + 1}.
                      </span>
                      <span className="font-mono">
                        {showPhrase ? word : '••••••'}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyWord(word, index)}
                      className="h-6 w-6 p-0"
                    >
                      {copiedWords[index] ? (
                        <Check className="h-3 w-3 text-green-600" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Security Tips */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Security Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                <p>Write down your backup phrase on paper and store it in a safe place</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">✓</div>
                <p>Consider storing copies in multiple secure locations</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">✗</div>
                <p>Never store your backup phrase digitally or share it online</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs font-bold">✗</div>
                <p>Never give your backup phrase to anyone, including support</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => navigate('/onboarding/setup')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <Button 
            className="flex-1"
            onClick={handleComplete}
            disabled={!allWordsCopied}
          >
            {allWordsCopied ? 'Complete Setup' : 'Copy All Words First'}
          </Button>
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 px-4">
          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>Progress</span>
            <span>3 of 3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
