import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ArsenTech's Blog Site",
    short_name: "ArsenTech Blog",
    description: "Welcome to ArsenTech's Official Blog Site — your go-to hub for tech tutorials, antivirus comparisons, and in-depth guides for programmers, tech enthusiasts, and more tech related curious minds.",
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