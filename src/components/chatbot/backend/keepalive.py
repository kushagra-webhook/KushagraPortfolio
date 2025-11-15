import os
from datetime import datetime
from supabase import create_client
from dotenv import load_dotenv
from pathlib import Path

def keep_database_alive():
    """
    Function to keep the Supabase database active by performing a simple query
    and logging the activity to the keepalive_logs table.
    """
    try:
        # Load environment variables
        env_path = Path(__file__).resolve().parents[4] / ".env.local"
        load_dotenv(dotenv_path=env_path)
        
        # Initialize Supabase client
        supabase_url = os.getenv("SUPABASE_URL")
        supabase_key = os.getenv("SUPABASE_SERVICE_ROLE_KEY")
        
        if not supabase_url or not supabase_key:
            raise ValueError("Supabase URL or API key not found in environment variables")
            
        supabase: Client = create_client(supabase_url, supabase_key)
        
        # Log entry for keep-alive
        log_entry = {
            'status': 'success',
            'message': 'Database keep-alive ping',
            'details': {
                'service': 'keepalive',
                'environment': os.getenv('FLASK_ENV', 'production')
            }
        }
        
        # Insert the log entry
        result = supabase.table('keepalive_logs').insert(log_entry).execute()
        
        # Verify the entry was created
        if not result.data:
            raise Exception("Failed to insert keep-alive log entry")
            
        # Also do a simple select query to ensure the database is active
        try:
            # This is just to keep the connection alive, we don't need the result
            supabase.table('keepalive_logs')\
                  .select('*')\
                  .order('created_at', desc=True)\
                  .limit(1)\
                  .execute()
        except Exception as e:
            print(f"Warning: Select query failed: {str(e)}")
            # Don't fail the entire operation if select fails
        
        return {
            'status': 'success',
            'message': 'Database keep-alive successful',
            'timestamp': datetime.utcnow().isoformat(),
            'log_id': result.data[0]['id'] if result.data else None
        }
        
    except Exception as e:
        error_message = f"Error keeping database alive: {str(e)}"
        print(error_message)
        
        # Try to log the error to the database if possible
        try:
            if 'supabase' in locals():
                error_log = {
                    'status': 'error',
                    'message': error_message
                }
                supabase.table('keepalive_logs').insert(error_log).execute()
        except Exception as inner_e:
            print(f"Failed to log error to database: {str(inner_e)}")
            
        return {
            'status': 'error',
            'message': error_message,
            'timestamp': datetime.utcnow().isoformat()
        }

if __name__ == "__main__":
    result = keep_database_alive()
    print(f"Keep-alive result: {result}")
