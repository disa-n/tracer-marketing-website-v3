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
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 text-[#202020] font-britti-sans">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mt-6 mb-3 text-[#202020] font-britti-sans">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-5 mb-2 text-[#202020] font-britti-sans">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="my-4 text-[#202020] leading-relaxed font-britti-sans">{children}</p>
    ),
    a: ({ href, children }) => (
      <Link href={href || '#'} className="text-blue-600 hover:underline">
        {children}
      </Link>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-4 text-[#202020] font-britti-sans">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-4 text-[#202020] font-britti-sans">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-1 text-[#202020] font-britti-sans">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#E8E8E8] pl-4 py-2 my-4 italic text-[#202020] font-britti-sans bg-[#F8F8F8]">
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
      <code className="bg-gray-100 text-gray-800 rounded px-1 py-0.5 text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 text-black rounded-lg p-6 my-6 text-sm font-mono overflow-x-auto whitespace-pre-wrap break-all w-full max-w-full">
        {children}
      </pre>
    ),
    ...components,
  }
}
