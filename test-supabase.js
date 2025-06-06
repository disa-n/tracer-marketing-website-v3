// Test script to verify Supabase connection
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('Testing Supabase connection...');
console.log('URL:', supabaseUrl);
console.log('Key (first 20 chars):', supabaseKey ? supabaseKey.substring(0, 20) + '...' : 'NOT FOUND');

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Environment variables not found!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnection() {
  try {
    console.log('Testing database connectivity...');

    // Test database access by trying to query the email_signups table
    const { data: emailData, error: emailError } = await supabase
      .from('email_signups')
      .select('*')
      .limit(1);

    if (emailError) {
      console.log('❌ email_signups table test:', emailError.message);
    } else {
      console.log('✅ email_signups table accessible');
      console.log('   Records found:', emailData ? emailData.length : 0);
    }

    // Test database access by trying to query the demo_enquiries table
    const { data: demoData, error: demoError } = await supabase
      .from('demo_enquiries')
      .select('*')
      .limit(1);

    if (demoError) {
      console.log('❌ demo_enquiries table test:', demoError.message);
    } else {
      console.log('✅ demo_enquiries table accessible');
      console.log('   Records found:', demoData ? demoData.length : 0);
    }

    // If at least one table works, connection is good
    return !emailError || !demoError;
  } catch (error) {
    console.error('❌ Connection test failed:', error.message);
    return false;
  }
}

testConnection().then(success => {
  if (success) {
    console.log('\n🎉 Supabase is configured correctly!');
  } else {
    console.log('\n❌ Supabase configuration has issues');
  }
});
