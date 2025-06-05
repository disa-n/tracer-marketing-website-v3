'use client';

import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/data/blogPosts';
import AuthorDisplay from './AuthorDisplay';

interface BlogPostTemplateProps {
  post: BlogPost;
  template?: 'default' | 'minimal' | 'magazine' | 'technical';
  mdxContent?: React.ReactNode; // For MDX posts, this will contain the rendered content
}

export default function BlogPostTemplate({ post, template = 'default', mdxContent }: BlogPostTemplateProps) {

  // Helper function to render content (MDX or HTML)
  const renderContent = () => {
    // Body content styling: font-britti-sans, text-[16px], leading-[25px], text-[#202020]
    // Headings (h2): text-[24px], mt-8 mb-4
    const proseClasses = "prose prose-lg max-w-none prose-headings:font-britti-sans prose-h1:text-[16px] prose-h1:leading-[25px] prose-h1:font-normal prose-h1:text-[#202020] prose-h1:mb-4 prose-h1:break-words prose-h2:text-[24px] prose-h2:text-[#202020] prose-h2:leading-[25px] prose-h2:font-normal prose-h2:mt-8 prose-h2:mb-4 prose-h2:break-words prose-h3:text-[16px] prose-h3:text-[#202020] prose-h3:font-normal prose-h3:mb-4 prose-h3:break-words prose-h4:text-[16px] prose-h4:text-[#202020] prose-h4:font-normal prose-h4:mb-4 prose-h4:break-words prose-h5:text-[16px] prose-h5:text-[#202020] prose-h5:font-normal prose-h5:mb-4 prose-h5:break-words prose-h6:text-[16px] prose-h6:text-[#202020] prose-h6:font-normal prose-h6:mb-4 prose-h6:break-words prose-p:font-britti-sans prose-p:text-[16px] prose-p:text-[#202020] prose-p:leading-[25px] prose-p:font-normal prose-p:mb-4 prose-p:break-words prose-ul:font-britti-sans prose-ul:text-[16px] prose-ul:text-[#202020] prose-ul:leading-[25px] prose-ol:font-britti-sans prose-ol:text-[16px] prose-ol:text-[#202020] prose-ol:leading-[25px] prose-li:mb-2 prose-li:text-[16px] prose-li:text-[#202020] prose-li:leading-[25px] prose-li:font-normal prose-li:break-words prose-strong:font-normal prose-strong:text-[#202020] prose-em:italic prose-em:text-[#202020] prose-a:text-[#202020] prose-a:underline hover:prose-a:no-underline prose-a:break-words";

    if (mdxContent) {
      return (
        <div className={proseClasses}>
          {mdxContent}
        </div>
      );
    }
    return (
      <div
        className={proseClasses}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    );
  };

  // Default template (clean reference layout)
  if (template === 'default') {
    return (
      <div className="bg-[#FCFCFC] w-full min-h-screen">
        {/* Centered container with all blog content */}
        <div className="max-w-[928px] mx-auto px-4 md:px-6 pt-28 pb-12">

          {/* Top Metadata Block */}
          <div className="mb-3">
            {/* Date and Author */}
            <div className="font-chakra-petch uppercase text-sm text-[#868686] leading-[19px] mb-2 flex flex-wrap items-center">
              <span>{post.date}</span>
              {post.author && (
                <span className="flex items-center whitespace-nowrap">
                  {" • "}
                  <span className="mx-1">By</span>
                  <AuthorDisplay author={post.author} />
                </span>
              )}
            </div>
          </div>

          {/* Title and Intro */}
          <div className="mb-4">
            {/* Title */}
            <h1 className="font-britti-sans text-[40px] text-[#202020] mb-3">
              {post.title}
            </h1>

            {/* Intro */}
            {post.description && (
              <p className="font-britti-sans text-[22px] leading-[25px] text-[#202020]">
                {post.description}
              </p>
            )}
          </div>

          {/* Hero Image */}
          {post.imageSrc && (
            <div className="w-full h-[400px] relative mb-4 mt-4 bg-[#FCFCFC] overflow-hidden">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Body Content (children) */}
          {renderContent()}
        </div>
      </div>
    );
  }

  // Minimal template
  if (template === 'minimal') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        {/* Title */}
        <h1 className="text-5xl font-bold font-britti-sans mb-4 text-[#202020] leading-tight">
          {post.title}
        </h1>
        
        {/* Meta info */}
        <div className="flex items-center gap-6 mb-12 text-[#888888] text-sm font-chakra-petch">
          <span>{post.date}</span>
          {post.author && <span>By <AuthorDisplay author={post.author} /></span>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>

        {/* Hero Image */}
        {post.imageSrc && (
          <div className="w-full h-[300px] relative mb-12 bg-[#FCFCFC] overflow-hidden">
            <Image
              src={post.imageSrc}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="prose prose-xl max-w-none prose-headings:font-britti-sans prose-p:text-[#202020] prose-p:leading-relaxed">
          {mdxContent || (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
      </div>
    );
  }

  // Magazine template
  if (template === 'magazine') {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - Meta info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {post.tag && (
                <div className="bg-[#202020] text-[#FCFCFC] px-4 py-2 text-xs font-chakra-petch uppercase tracking-wider mb-4 inline-block">
                  {post.tag}
                </div>
              )}
              
              <h1 className="text-3xl font-bold font-britti-sans mb-6 text-[#202020]">
                {post.title}
              </h1>
              
              <div className="space-y-4 text-[#888888] text-sm font-chakra-petch">
                <div>Published: {post.date}</div>
                {post.author && <div>Author: <AuthorDisplay author={post.author} /></div>}
                {post.readTime && <div>Read time: {post.readTime}</div>}
              </div>

              {/* Hero Image */}
              {post.imageSrc && (
                <div className="w-full h-[200px] relative mt-8 bg-[#FCFCFC] overflow-hidden">
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right column - Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none prose-headings:font-britti-sans">
              {mdxContent || (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Technical template
  if (template === 'technical') {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="border-l-4 border-[#202020] pl-6 mb-12">
          <div className="flex items-center gap-4 mb-4">
            {post.tag && (
              <span className="bg-[#E8E8E8] text-[#202020] px-3 py-1 text-xs font-mono uppercase">
                {post.tag}
              </span>
            )}
            <span className="text-[#888888] text-sm font-mono">{post.date}</span>
          </div>
          
          <h1 className="text-4xl font-bold font-mono mb-4 text-[#202020]">
            {post.title}
          </h1>
          
          <p className="text-lg text-[#666666] font-mono leading-relaxed mb-4">
            {post.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm font-mono text-[#888888]">
            {post.author && <span>Author: <AuthorDisplay author={post.author} /></span>}
            {post.readTime && <span>Est. reading time: {post.readTime}</span>}
          </div>
        </div>

        {/* Hero Image */}
        {post.imageSrc && (
          <div className="w-full h-[350px] relative mb-12 bg-[#FCFCFC] overflow-hidden">
            <Image
              src={post.imageSrc}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-mono prose-code:bg-[#F5F5F5] prose-code:px-2 prose-code:py-1 prose-code:rounded">
          {mdxContent || (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
        </div>
      </div>
    );
  }

  // Fallback to default
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Template not found</h1>
      <p>The requested template &quot;{template}&quot; is not available.</p>
    </div>
  );
}
