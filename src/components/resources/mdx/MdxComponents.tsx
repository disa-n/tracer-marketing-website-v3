'use client';

import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-[#CCCCCC] font-britti-sans">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-[#CCCCCC] font-britti-sans">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-5 mb-2 text-[#CCCCCC] font-britti-sans">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="my-4 text-[#CCCCCC] leading-relaxed font-britti-sans">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link href={href || '#'} className="text-[#CCCCCC] hover:underline">
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 text-[#CCCCCC] font-britti-sans">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 text-[#CCCCCC] font-britti-sans">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-1 text-[#CCCCCC] font-britti-sans">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#E8E8E8] pl-4 py-2 my-4 italic text-[#CCCCCC] font-britti-sans bg-[#333333]">
        {children}
      </blockquote>
    ),
    img: (props) => (
      <Image
        src={props.src || ''}
        alt={props.alt || 'Blog image'}
        width={props.width || 800}
        height={props.height || 400}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="my-6"
      />
    ),
    code: ({ children }) => (
      <code className="bg-[#333333] text-[#CCCCCC] rounded px-1 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-[#333333] text-[#CCCCCC] rounded-lg p-4 my-6 text-sm font-mono">
        {children}
      </pre>
    ),
    // Make Next.js Image component available to MDX
    Image: Image,
    ...components,
  }
}

