/**
 * Helper function to build public asset URLs with proper base path handling
 * for IC deployments and local development
 */
export function publicAssetUrl(path: string): string {
  // If path is already absolute, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // Get base URL from environment
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Normalize path (remove leading slash if present)
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Normalize base URL (ensure trailing slash)
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${normalizedBase}${normalizedPath}`;
}
