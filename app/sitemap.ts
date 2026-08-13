import type { MetadataRoute } from 'next';
import { commpolarProducts, shieldBoxes, site } from '@/lib/data';
export default function sitemap():MetadataRoute.Sitemap{
 const routes=['','/products','/solutions','/rf-calibration','/commpolar','/shield-boxes','/services','/about','/contact'];
 return [
  ...routes.map(path=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===''?'weekly':'monthly' as const,priority:path===''?1:0.8})),
  ...commpolarProducts.map(p=>({url:`${site.url}/commpolar/${p.slug}`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:0.7})),
  ...shieldBoxes.map(p=>({url:`${site.url}/shield-boxes/${p.slug}`,lastModified:new Date(),changeFrequency:'monthly' as const,priority:0.7}))
 ];
}
