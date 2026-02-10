/**
 * Builds a public asset URL by prefixing the path with the runtime base path.
 * This ensures assets load correctly when the app is deployed under a non-root path.
 * 
 * Self-check: This utility is critical for IC deployments with non-root hosting paths.
 * It normalizes both the base path and asset path to prevent double-slashes and
 * ensures proper URL resolution in production builds.
 * 
 * @param path - The asset path relative to the public directory (e.g., "assets/gallery/image.jpg")
 * @returns The full URL with the correct base path
 */
export function publicAssetUrl(path: string): string {
  // Handle already-absolute URLs (http://, https://, //)
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path;
  }
  
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Normalize the asset path by removing leading slash if present
  const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Normalize base path: ensure it starts with / and ends with /
  let normalizedBase = basePath;
  if (!normalizedBase.startsWith('/')) {
    normalizedBase = '/' + normalizedBase;
  }
  if (!normalizedBase.endsWith('/')) {
    normalizedBase = normalizedBase + '/';
  }
  
  // Combine and remove any double slashes except after protocol
  const combined = `${normalizedBase}${normalizedPath}`;
  return combined.replace(/([^:]\/)\/+/g, '$1');
}
