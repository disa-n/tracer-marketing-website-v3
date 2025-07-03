/**
 * Get Signed PDF URL
 * 
 * Utility function to get a signed URL for downloading PDFs from Supabase Storage
 */

import { supabasePdfs } from './supabasePdfs';

/**
 * Get a signed URL for a PDF file in the whitepapers bucket
 * @param fileName - The name of the PDF file (e.g., 'tracer-whitepaper.pdf')
 * @returns Promise with the signed URL or null if error
 */
export async function getSignedPdfUrl(fileName: string): Promise<string | null> {
  console.log('🔧 getSignedPdfUrl called with fileName:', fileName);

  if (!supabasePdfs) {
    console.error('❌ Supabase PDF client not available');
    console.log('🔍 Check your NEXT_PUBLIC_SUPABASE_ARTICLES_URL and NEXT_PUBLIC_SUPABASE_ARTICLES_ANON_KEY environment variables');
    return null;
  }

  console.log('✅ Supabase PDF client is available');

  try {
    console.log('📡 Attempting to create signed URL from whitepapers bucket...');

    const { data, error } = await supabasePdfs.storage
      .from('whitepapers')
      .createSignedUrl(fileName, 60 * 60); // 1 hour expiry

    if (error) {
      console.error('❌ Error creating signed URL:', error.message);
      console.log('🔍 Possible issues:');
      console.log('   - File does not exist in whitepapers bucket');
      console.log('   - Bucket permissions are incorrect');
      console.log('   - File name is incorrect:', fileName);
      return null;
    }

    console.log('✅ Signed URL created successfully');
    console.log('🔗 URL length:', data.signedUrl?.length || 0);
    return data.signedUrl;
  } catch (err) {
    console.error('❌ Failed to get signed URL:', err);
    return null;
  }
}
