import { useEffect } from 'react'
import { siteContent } from '../config/siteContent'

function setMetaTag(selector: string, name: string, content: string) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!element) {
    element = document.createElement('meta')
    if (selector.includes('property')) {
      element.setAttribute('property', name)
    } else {
      element.setAttribute('name', name)
    }
    document.head.appendChild(element)
  }

  element.setAttribute(selector.includes('property') ? 'property' : 'name', name)
  element.setAttribute('content', content)
}

export function useSeo() {
  useEffect(() => {
    document.title = siteContent.seo.title
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', siteContent.seo.canonicalUrl)
    setMetaTag('meta[name="description"]', 'description', siteContent.seo.description)
    setMetaTag('meta[name="keywords"]', 'keywords', siteContent.seo.keywords)
    setMetaTag('meta[property="og:title"]', 'og:title', siteContent.seo.title)
    setMetaTag('meta[property="og:description"]', 'og:description', siteContent.seo.description)
    setMetaTag('meta[property="og:url"]', 'og:url', siteContent.seo.canonicalUrl)
    setMetaTag('meta[name="twitter:title"]', 'twitter:title', siteContent.seo.title)
    setMetaTag('meta[name="twitter:description"]', 'twitter:description', siteContent.seo.description)
  }, [])
}
