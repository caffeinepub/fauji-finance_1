/**
 * Utility functions for Google Maps integration without API key
 */

/**
 * Generates a Google Maps search URL for the given address
 * Opens in Google Maps app or web based on device
 */
export function getGoogleMapsUrl(address: string): string {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
}

/**
 * Generates an embed URL for Google Maps iframe
 * Uses the place query parameter for address-based embedding
 */
export function getGoogleMapsEmbedUrl(address: string): string {
  const encodedAddress = encodeURIComponent(address);
  return `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
}
