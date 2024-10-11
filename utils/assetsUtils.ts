export function strapiAsset(url: string | null | undefined){
  return url ? 
  `${process.env.NEXT_PUBLIC_STRAPI_ASSETS_PREFIX}${url}` :
  '';
}