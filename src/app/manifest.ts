import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ArsenTech's Website",
    short_name: "ArsenTech",
    description: "Welcome to ArsenTech's Official Website — your go-to hub for tech tutorials, antivirus comparisons, and in-depth guides for programmers, tech enthusiasts, and more tech related curious minds.",
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#22b455',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: "/app-icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      }
    ],
  }
}