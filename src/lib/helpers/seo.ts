import { Metadata } from "next";
import { SITE_URL } from "../constants";

export function getValueFromKey(searchParams: URLSearchParams, key: string, fallbackValue=""): string{
  const hasKey = searchParams.has(key);
  return hasKey ? searchParams.get(key)?.slice(0,100) ?? fallbackValue : fallbackValue
}
export const absoluteURL = (path?: string) => !path ? SITE_URL : `${SITE_URL}${path}`

export function getRangeAsText(page: number, pageSize: number, totalResults: number, itemName = 'result'): string {
  if (totalResults === 0) return `Showing 0 ${itemName}s on this page`;
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalResults);
  if (start >= totalResults) return `Showing ${totalResults} of ${totalResults} ${itemName}s`;
  return `Showing ${start} - ${end} of ${totalResults} ${totalResults <= 1 ? itemName : `${itemName}s`}`;
}

export const metaAlternatives = (url?: string): Metadata["alternates"] => ({
  canonical: absoluteURL(url)
})