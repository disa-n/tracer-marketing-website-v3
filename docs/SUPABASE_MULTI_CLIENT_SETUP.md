# Multiple Supabase Clients Setup

This document explains how to use the multiple Supabase clients configured in this project.

## Overview

The project is configured with two separate Supabase clients:

1. **Email Client** (`supabaseEmail`) - For email signups and demo enquiries
2. **Articles Client** (`supabaseArticles`) - For blog articles and content management

## Environment Variables

The following environment variables are configured in `.env.local`:

```bash
# Email Signups & Demo Enquiries Project
NEXT_PUBLIC_SUPABASE_EMAIL_URL=https://onvjbefrerpcecjbmipw.supabase.co
NEXT_PUBLIC_SUPABASE_EMAIL_ANON_KEY=your_email_project_anon_key

# Articles Project
NEXT_PUBLIC_SUPABASE_ARTICLES_URL=https://ltuimwwozyrtvzrdmlpa.supabase.co
NEXT_PUBLIC_SUPABASE_ARTICLES_ANON_KEY=your_articles_project_anon_key

# Legacy environment variables (for backward compatibility)
NEXT_PUBLIC_SUPABASE_URL=https://onvjbefrerpcecjbmipw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_email_project_anon_key
```

## Client Configuration

The clients are configured in `src/lib/supabaseClient.ts`:

```typescript
// Named clients for specific purposes
export const supabaseEmail = createEmailSupabaseClient();
export const supabaseArticles = createArticlesSupabaseClient();

// Legacy export for backward compatibility
export const supabase = createEmailSupabaseClient();
```

## Usage

### Option 1: Direct Client Usage

```typescript
import { supabaseEmail, supabaseArticles } from '@/lib/supabaseClient';

// Email signups
const { error } = await supabaseEmail
  .from('email_signups')
  .insert([{ email: 'user@example.com' }]);

// Articles
const { data, error } = await supabaseArticles
  .from('articles')
  .select('*')
  .eq('published', true);
```

### Option 2: Utility Functions (Recommended)

Use the utility functions from `src/lib/supabase-utils.ts`:

```typescript
import { 
  saveEmailSignup, 
  saveDemoEnquiry, 
  getPublishedArticles, 
  getArticleBySlug 
} from '@/lib/supabase-utils';

// Email signup
const result = await saveEmailSignup('user@example.com');
if (result.success) {
  console.log('Email saved successfully');
} else {
  console.error('Error:', result.error);
}

// Demo enquiry
const enquiryResult = await saveDemoEnquiry({
  name: 'John Doe',
  email: 'john@example.com',
  job_title: 'Developer'
});

// Get articles
const { articles, error } = await getPublishedArticles();
```

## Database Schemas

### Email Project Tables

- `email_signups`
  - `id` (uuid, primary key)
  - `email` (text)
  - `created_at` (timestamp)

- `demo_enquiries`
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `job_title` (text)
  - `created_at` (timestamp)

### Articles Project Tables

- `articles`
  - `id` (uuid, primary key)
  - `slug` (text, unique)
  - `title` (text)
  - `content` (text)
  - `description` (text)
  - `author` (text)
  - `tag` (text)
  - `published_at` (timestamp)
  - `created_at` (timestamp)
  - `updated_at` (timestamp)
  - `image_url` (text)
  - `read_time` (text)
  - `published` (boolean)

## Example Components

### Email Signup Component

```typescript
import { saveEmailSignup } from '@/lib/supabase-utils';

const handleSubmit = async (email: string) => {
  const result = await saveEmailSignup(email);
  if (result.success) {
    // Handle success
  } else {
    // Handle error
  }
};
```

### Articles Display Component

```typescript
import { getPublishedArticles } from '@/lib/supabase-utils';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    async function loadArticles() {
      const { articles, error } = await getPublishedArticles();
      if (!error) {
        setArticles(articles);
      }
    }
    loadArticles();
  }, []);
  
  // Render articles...
};
```

## Migration Guide

### Existing Components

Most existing components will continue to work because:

1. The legacy `supabase` export still points to the email client
2. All existing email signup and demo enquiry functionality remains unchanged

### New Components

For new components, prefer using the utility functions from `supabase-utils.ts` instead of direct client access.

## Testing Connections

Use the utility function to test both connections:

```typescript
import { testConnections } from '@/lib/supabase-utils';

const connections = await testConnections();
console.log('Email client:', connections.email ? 'Connected' : 'Failed');
console.log('Articles client:', connections.articles ? 'Connected' : 'Failed');
```

## Best Practices

1. **Use utility functions** instead of direct client access when possible
2. **Handle errors gracefully** - both clients can be unavailable if environment variables are missing
3. **Check client availability** before making requests
4. **Use TypeScript types** provided in `supabase-utils.ts` for better type safety
5. **Keep database schemas documented** and update types when schemas change

## Troubleshooting

### Client Not Available

If you see "Supabase client not available" errors:

1. Check that environment variables are set correctly
2. Verify the URLs and API keys are valid
3. Ensure the environment variables are prefixed with `NEXT_PUBLIC_`

### Connection Issues

Use the `testConnections()` utility to diagnose connection problems:

```typescript
import { testConnections, getClientStatus } from '@/lib/supabase-utils';

// Check if clients are initialized
const status = getClientStatus();
console.log('Client status:', status);

// Test actual connections
const connections = await testConnections();
console.log('Connection test:', connections);
```
