type ImageSize = 'sm' | 'lg'

const SIZES = {
  sm: { width: 64, height: 64 },
  lg: { width: 280, height: 280 }
}

export function getProductImage(productName: string, size: ImageSize = 'sm') {
  const { width, height } = SIZES[size]
  const baseName = productName.toLowerCase().replace(/\s+/g, '-')
  
  try {
    // Use different image files for preview vs full size
    const imageName = size === 'sm' 
      ? `${baseName}-preview.png`
      : `${baseName}.png`
      
    return {
      src: `/assets/products/${imageName}`,
      width,
      height,
      alt: `${productName} ${size === 'sm' ? 'preview' : 'full'} image`
    }
  } catch {
    // Fallback to placeholder if image doesn't exist
    return {
      src: `/placeholder.svg?height=${height}&width=${width}`,
      width,
      height,
      alt: `${productName} placeholder`
    }
  }
} 