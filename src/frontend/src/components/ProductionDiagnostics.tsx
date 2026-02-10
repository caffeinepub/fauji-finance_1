import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import { publicAssetUrl } from '@/utils/publicAssetUrl';

interface DiagnosticItem {
  label: string;
  path: string;
  url: string;
}

export default function ProductionDiagnostics() {
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  const coreAssets: DiagnosticItem[] = [
    {
      label: 'Hero Banner',
      path: 'assets/generated/fauji-hero-banner.dim_1920x900.png',
      url: publicAssetUrl('assets/generated/fauji-hero-banner.dim_1920x900.png'),
    },
    {
      label: 'Icon Sprite',
      path: 'assets/generated/fauji-icons-set.dim_512x512.png',
      url: publicAssetUrl('assets/generated/fauji-icons-set.dim_512x512.png'),
    },
    {
      label: 'Process Banner',
      path: 'assets/generated/process-banner.dim_1600x500.png',
      url: publicAssetUrl('assets/generated/process-banner.dim_1600x500.png'),
    },
    {
      label: 'Mohit Photo',
      path: 'assets/mohit.jpeg',
      url: publicAssetUrl('assets/mohit.jpeg'),
    },
    {
      label: 'Shekhar Photo',
      path: 'assets/shekhar-2.jpeg',
      url: publicAssetUrl('assets/shekhar-2.jpeg'),
    },
    {
      label: 'Rajvir Photo',
      path: 'assets/rajvirsinghyadav-2.jpeg',
      url: publicAssetUrl('assets/rajvirsinghyadav-2.jpeg'),
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md max-h-[80vh] overflow-auto">
      <Card className="border-2 border-yellow-500 bg-white shadow-2xl">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-500">
              DIAGNOSTICS
            </Badge>
            Production Debug Panel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <p className="font-semibold mb-1">Runtime BASE_URL:</p>
            <code className="block bg-gray-100 p-2 rounded text-xs break-all">
              {baseUrl}
            </code>
          </div>

          <div>
            <p className="font-semibold mb-2">Core Asset URLs:</p>
            <div className="space-y-2">
              {coreAssets.map((asset, idx) => (
                <div key={idx} className="bg-gray-50 p-2 rounded">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-xs">{asset.label}</span>
                    <a
                      href={asset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                      title="Test in new tab"
                    >
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <code className="block text-xs text-gray-600 break-all">
                    {asset.url}
                  </code>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t">
            <p className="text-xs text-gray-600">
              To hide this panel, remove <code>?diagnostics=1</code> from the URL.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
