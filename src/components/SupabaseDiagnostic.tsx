/**
 * Supabase Diagnostic Component
 * 
 * Helps diagnose Supabase connection and storage issues
 */

'use client';

import { supabasePdfs } from '@/lib/supabasePdfs';
import { useState } from 'react';

export default function SupabaseDiagnostic() {
  const [results, setResults] = useState<any>(null);
  const [testing, setTesting] = useState(false);

  const runDiagnostics = async () => {
    setTesting(true);
    const diagnostics: any = {
      timestamp: new Date().toISOString(),
      client: null,
      storage: null,
      bucket: null,
      files: null,
      errors: []
    };

    try {
      // Test 1: Check if client exists
      console.log('🔍 Testing Supabase client...');
      diagnostics.client = !!supabasePdfs;
      
      if (!supabasePdfs) {
        diagnostics.errors.push('Supabase client not available - check environment variables');
        setResults(diagnostics);
        setTesting(false);
        return;
      }

      // Test 2: Check storage access
      console.log('🔍 Testing storage access...');
      try {
        const { data: buckets, error: bucketsError } = await supabasePdfs.storage.listBuckets();
        diagnostics.storage = !bucketsError;
        if (bucketsError) {
          diagnostics.errors.push(`Storage access error: ${bucketsError.message}`);
        } else {
          diagnostics.buckets = buckets?.map(b => b.name) || [];
        }
      } catch (err) {
        diagnostics.storage = false;
        diagnostics.errors.push(`Storage access failed: ${err}`);
      }

      // Test 3: Check whitepapers bucket
      console.log('🔍 Testing whitepapers bucket...');
      try {
        const { data: files, error: filesError } = await supabasePdfs.storage
          .from('whitepapers')
          .list('', { limit: 100, sortBy: { column: 'name', order: 'asc' } });

        diagnostics.bucket = !filesError;
        if (filesError) {
          diagnostics.errors.push(`Whitepapers bucket error: ${filesError.message}`);
        } else {
          diagnostics.files = files?.map(f => ({
            name: f.name,
            size: f.metadata?.size || 'unknown',
            type: f.metadata?.mimetype || 'unknown'
          })) || [];

          // Also check for folders
          const folders = files?.filter(f => f.name && !f.name.includes('.')) || [];
          if (folders.length > 0) {
            diagnostics.folders = folders.map(f => f.name);
          }
        }
      } catch (err) {
        diagnostics.bucket = false;
        diagnostics.errors.push(`Whitepapers bucket failed: ${err}`);
      }

      // Test 4: Check for specific test file with different path variations
      console.log('🔍 Checking for tracer-test-file.pdf...');
      const pathVariations = [
        'tracer-test-file.pdf',
        '/tracer-test-file.pdf',
        'tracer-test-file.pdf/',
        '/tracer-test-file.pdf/'
      ];

      diagnostics.testFile = false;
      diagnostics.testFileAttempts = [];

      for (const path of pathVariations) {
        try {
          const { error } = await supabasePdfs.storage
            .from('whitepapers')
            .createSignedUrl(path, 60);

          diagnostics.testFileAttempts.push({
            path,
            success: !error,
            error: error?.message || null
          });

          if (!error) {
            diagnostics.testFile = true;
            diagnostics.workingPath = path;
            break;
          }
        } catch (err) {
          diagnostics.testFileAttempts.push({
            path,
            success: false,
            error: `Exception: ${err}`
          });
        }
      }

      if (!diagnostics.testFile) {
        diagnostics.errors.push('Test file not found with any path variation');
      }

    } catch (err) {
      diagnostics.errors.push(`General error: ${err}`);
    }

    setResults(diagnostics);
    setTesting(false);
  };

  return (
    <div className="bg-white border border-[#E8E8E8] p-6 max-w-2xl mx-auto">
      <h3 className="text-lg font-medium text-[#202020] mb-4">
        Supabase Diagnostics
      </h3>
      
      <button
        onClick={runDiagnostics}
        disabled={testing}
        className="px-4 py-2 bg-[#202020] text-white hover:bg-gray-800 disabled:opacity-50 mb-4"
      >
        {testing ? 'Running Tests...' : 'Run Diagnostics'}
      </button>

      {results && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className={`p-3 rounded ${results.client ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <strong>Client:</strong> {results.client ? '✅ Connected' : '❌ Failed'}
            </div>
            
            <div className={`p-3 rounded ${results.storage ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <strong>Storage:</strong> {results.storage ? '✅ Accessible' : '❌ Failed'}
            </div>
            
            <div className={`p-3 rounded ${results.bucket ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <strong>Bucket:</strong> {results.bucket ? '✅ Accessible' : '❌ Failed'}
            </div>
            
            <div className={`p-3 rounded ${results.testFile ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <strong>Test File:</strong> {results.testFile ? '✅ Found' : '❌ Missing'}
            </div>
          </div>

          {results.buckets && (
            <div className="p-3 bg-blue-50 text-blue-800 rounded text-sm">
              <strong>Available Buckets:</strong> {results.buckets.join(', ') || 'None'}
            </div>
          )}

          {results.files && (
            <div className="p-3 bg-blue-50 text-blue-800 rounded text-sm">
              <strong>Files in whitepapers:</strong>
              {results.files.length === 0 ? (
                <span className="ml-2">None</span>
              ) : (
                <ul className="list-disc list-inside mt-2 ml-4">
                  {results.files.map((file: any, index: number) => (
                    <li key={index}>
                      <strong>{file.name || file}</strong>
                      {file.size && <span className="text-xs ml-2">({file.size} bytes)</span>}
                      {file.type && <span className="text-xs ml-2">[{file.type}]</span>}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {results.folders && results.folders.length > 0 && (
            <div className="p-3 bg-yellow-50 text-yellow-800 rounded text-sm">
              <strong>Folders found:</strong> {results.folders.join(', ')}
            </div>
          )}

          {results.testFileAttempts && (
            <div className="p-3 bg-gray-50 text-gray-700 rounded text-sm">
              <strong>Test file path attempts:</strong>
              <ul className="list-disc list-inside mt-2 ml-4">
                {results.testFileAttempts.map((attempt: any, index: number) => (
                  <li key={index} className={attempt.success ? 'text-green-700' : 'text-red-700'}>
                    <code>&quot;{attempt.path}&quot;</code> - {attempt.success ? '✅ Success' : `❌ ${attempt.error}`}
                  </li>
                ))}
              </ul>
              {results.workingPath && (
                <div className="mt-2 p-2 bg-green-100 text-green-800 rounded">
                  <strong>Working path found:</strong> <code>{results.workingPath}</code>
                </div>
              )}
            </div>
          )}

          {results.errors.length > 0 && (
            <div className="p-3 bg-red-50 text-red-800 rounded text-sm">
              <strong>Errors:</strong>
              <ul className="list-disc list-inside mt-2">
                {results.errors.map((error: string, index: number) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="p-3 bg-gray-50 text-gray-600 rounded text-xs">
            <strong>Environment Check:</strong>
            <br />ARTICLES_URL: {process.env.NEXT_PUBLIC_SUPABASE_ARTICLES_URL ? '✅ Set' : '❌ Missing'}
            <br />ARTICLES_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ARTICLES_ANON_KEY ? '✅ Set' : '❌ Missing'}
          </div>
        </div>
      )}
    </div>
  );
}
