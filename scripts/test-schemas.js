#!/usr/bin/env node

/**
 * JSON-LD Schema Testing Utility
 * 
 * This script helps test and validate the JSON-LD schemas
 * for the blog/resources section.
 */

const fs = require('fs');
const path = require('path');

// Mock environment for testing
process.env.NODE_ENV = 'development';
process.env.NEXT_PUBLIC_BASE_URL = 'http://localhost:3000';

// Simple mock for Next.js modules that aren't available in Node.js
const mockBlogPost = {
  slug: 'test-post-1',
  title: 'Test Post 1',
  date: 'January 1, 2024',
  description: 'Description for test post 1',
  author: 'Team Tracer',
  tag: 'test',
  readTime: '2 min read',
  ogImage: '/Blog/test-image.webp',
  type: 'mdx'
};

// Import the schema generation functions
// Note: This would need to be adapted for actual testing
// since the blog-registry uses Next.js specific imports

function generateBlogSchema() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Tracer Resources",
    "url": `${baseUrl}/resources`,
    "description": "Insights, updates, and technical articles on HPC observability and scientific computing.",
    "publisher": {
      "@type": "Organization",
      "name": "Tracer",
      "url": baseUrl
    },
    "inLanguage": "en-US"
  };
}

function generateBlogPostSchema(post) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const postUrl = `${baseUrl}/resources/${post.slug}`;
  
  // Format date to ISO 8601
  const publishDate = new Date(post.date).toISOString();
  
  // Use author or default to "Tracer Team"
  const authorName = typeof post.author === 'string' ? post.author : 
                    Array.isArray(post.author) ? post.author.join(', ') : 
                    'Tracer Team';
  
  // Generate keywords from tag and title
  const keywords = [
    post.tag,
    'HPC',
    'observability',
    'scientific computing',
    'performance monitoring'
  ].filter(Boolean).join(', ');

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.ogImage || post.imageSrc,
    "author": {
      "@type": "Organization",
      "name": authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tracer",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "url": postUrl,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "articleSection": "Technology",
    "keywords": keywords
  };
}

function validateSchema(schema, type) {
  const errors = [];
  
  // Basic validation
  if (!schema['@context']) errors.push('Missing @context');
  if (!schema['@type']) errors.push('Missing @type');
  if (schema['@type'] !== type) errors.push(`Expected @type to be ${type}`);
  
  // Type-specific validation
  if (type === 'Blog') {
    if (!schema.name) errors.push('Missing name');
    if (!schema.url) errors.push('Missing url');
    if (!schema.description) errors.push('Missing description');
    if (!schema.publisher) errors.push('Missing publisher');
  }
  
  if (type === 'BlogPosting') {
    if (!schema.headline) errors.push('Missing headline');
    if (!schema.description) errors.push('Missing description');
    if (!schema.author) errors.push('Missing author');
    if (!schema.publisher) errors.push('Missing publisher');
    if (!schema.datePublished) errors.push('Missing datePublished');
    if (!schema.url) errors.push('Missing url');
  }
  
  return errors;
}

function testSchemas() {
  console.log('🧪 Testing JSON-LD Schemas\n');
  
  // Test Blog schema
  console.log('📝 Testing Blog Schema...');
  const blogSchema = generateBlogSchema();
  const blogErrors = validateSchema(blogSchema, 'Blog');
  
  if (blogErrors.length === 0) {
    console.log('✅ Blog schema is valid');
  } else {
    console.log('❌ Blog schema has errors:');
    blogErrors.forEach(error => console.log(`   - ${error}`));
  }
  
  console.log('\nBlog Schema:');
  console.log(JSON.stringify(blogSchema, null, 2));
  
  // Test BlogPosting schema
  console.log('\n📄 Testing BlogPosting Schema...');
  const blogPostSchema = generateBlogPostSchema(mockBlogPost);
  const postErrors = validateSchema(blogPostSchema, 'BlogPosting');
  
  if (postErrors.length === 0) {
    console.log('✅ BlogPosting schema is valid');
  } else {
    console.log('❌ BlogPosting schema has errors:');
    postErrors.forEach(error => console.log(`   - ${error}`));
  }
  
  console.log('\nBlogPosting Schema:');
  console.log(JSON.stringify(blogPostSchema, null, 2));
  
  // Save schemas to files for manual testing
  const outputDir = path.join(__dirname, '..', 'test-output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(outputDir, 'blog-schema.json'),
    JSON.stringify(blogSchema, null, 2)
  );
  
  fs.writeFileSync(
    path.join(outputDir, 'blog-post-schema.json'),
    JSON.stringify(blogPostSchema, null, 2)
  );
  
  console.log('\n💾 Schemas saved to test-output/ directory');
  console.log('   - blog-schema.json');
  console.log('   - blog-post-schema.json');
  
  console.log('\n🔍 Next steps:');
  console.log('   1. Copy the JSON from test-output/ files');
  console.log('   2. Paste into https://validator.schema.org/');
  console.log('   3. Or test with Google Rich Results: https://search.google.com/test/rich-results');
}

// Run the tests
if (require.main === module) {
  testSchemas();
}

module.exports = {
  generateBlogSchema,
  generateBlogPostSchema,
  validateSchema,
  testSchemas
};
