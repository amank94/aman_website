'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { getProductImage } from '@/lib/image-utils'

interface Product {
  name: string
  description: string
  role: string
  link?: string
  year: string
  company: string
  videoId?: string
}

export function ProductsPage() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const products: Product[] = [
    {
      name: 'Phoenix',
      company: 'Arize',
      description: 'Building open-source tools for AI engineers to trace, evaluate, and iterate on generative AI applications. Phoenix helps developers ship LLM apps with quality and confidence through tracing, evaluation frameworks, and RAG analysis.',
      role: 'AI PM',
      link: 'https://phoenix.arize.com',
      year: '2022-present'
    },
    {
      name: 'Feature Store',
      company: 'Spotify',
      description: 'Developed feature store infrastructure on the ML Platform team, enabling machine learning engineers to efficiently manage and serve features for ML models at scale.',
      role: 'ML Platform Engineer',
      year: '2020-2022',
      videoId: 'qv2DtDvpWx8'
    },
    //{
    //   name: 'Sanikind',
    //   company: 'Sanikind',
    //   description: 'Created a reusable hand sanitizer dispenser made from ocean-bound plastic. Successfully shipped 20,000 units and helped remove 120,000 plastic water bottles from the ocean.',
    //   role: 'Founder',
    //   year: '2020'
    // },
    {
      name: 'AI Evaluation',
      company: 'Cruise AI',
      description: 'Worked on AI evaluation systems for autonomous vehicles, helping to ensure safety and reliability of self-driving technology.',
      role: 'AI Engineer',
      year: '2018-2020'
    },
    {
      name: 'Product Development',
      company: 'Apple',
      description: 'Contributed to product development initiatives.',
      role: 'PD Engineer',
      year: '2017'
    }
  ]

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 overflow-y-auto">
          <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>

          <div className="space-y-24 lg:space-y-32">
            {products.map((product) => (
              <article key={product.name} className="max-w-xl">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4 rounded-md overflow-hidden">
                    <Image
                      {...getProductImage(product.name, 'sm')}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-medium mb-1">{product.company}</h2>
                    <h3 className="text-lg">{product.name}</h3>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground">{product.year}</span>
                </div>
                <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                  {product.description}
                </p>
                <div className="text-lg text-muted-foreground mb-4">{product.role}</div>
                {product.link && (
                  <Button
                    variant="link"
                    asChild
                    className="p-0 h-auto font-normal"
                  >
                    <Link href={product.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Right Column - Modified for centered alignment */}
        <div className="w-full lg:w-1/2 bg-muted p-8 lg:p-16 overflow-y-auto">
          <div className="h-[68px] mb-8 lg:mb-16" />
          <div className="space-y-24 lg:space-y-32">
            {products.map((product) => (
              <div 
                key={product.name}
                className="max-w-[280px] mx-auto aspect-square bg-background rounded-xl overflow-hidden"
              >
                {product.videoId ? (
                  <iframe
                    width="280"
                    height="280"
                    src={`https://www.youtube.com/embed/${product.videoId}`}
                    title={`${product.name} video`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <Image
                    {...getProductImage(product.name, 'lg')}
                    className="object-cover w-full h-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}