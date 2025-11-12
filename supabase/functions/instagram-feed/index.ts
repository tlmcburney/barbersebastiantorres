import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface InstagramMediaItem {
  id: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
}

interface InstagramAPIResponse {
  data: InstagramMediaItem[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Get Instagram Access Token from environment
    const instagramAccessToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
    const instagramUserId = Deno.env.get('INSTAGRAM_USER_ID');

    // If no access token is configured, return fallback static posts
    if (!instagramAccessToken || !instagramUserId) {
      const fallbackPosts = [
        {
          id: '1',
          image_url: '/images/1181254A-2AD7-45E1-B468-1734239BAD12_4_5005_c.jpeg',
          permalink: 'https://www.instagram.com/barbersebastiantorres/',
          timestamp: new Date().toISOString()
        },
        {
          id: '2',
          image_url: '/images/68B6D779-3A85-4156-8FA0-9E20E9F21FF5_4_5005_c.jpeg',
          permalink: 'https://www.instagram.com/barbersebastiantorres/',
          timestamp: new Date().toISOString()
        },
        {
          id: '3',
          image_url: '/images/F8735A20-DD0A-412D-BAB5-F43F333784F8.jpeg',
          permalink: 'https://www.instagram.com/barbersebastiantorres/',
          timestamp: new Date().toISOString()
        },
        {
          id: '4',
          image_url: '/images/D266C471-DA6C-4442-A194-F905DB37EB0A.jpeg',
          permalink: 'https://www.instagram.com/barbersebastiantorres/',
          timestamp: new Date().toISOString()
        },
        {
          id: '5',
          image_url: '/images/15CCF54C-B40E-472C-84E0-5508CBDAAFDC.png',
          permalink: 'https://www.instagram.com/barbersebastiantorres/',
          timestamp: new Date().toISOString()
        },
        {
          id: '6',
          image_url: '/images/25295758-CF93-432E-BB31-66FE5B44C743.png',
          permalink: 'https://www.instagram.com/barbersebastiantorres/',
          timestamp: new Date().toISOString()
        }
      ];

      return new Response(
        JSON.stringify({
          success: true,
          posts: fallbackPosts,
          usingFallback: true,
          message: 'Using fallback images. Configure INSTAGRAM_ACCESS_TOKEN to fetch live posts.'
        }),
        {
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        }
      );
    }

    // Fetch from Instagram Graph API
    const fields = 'id,media_type,media_url,permalink,thumbnail_url,timestamp';
    const instagramApiUrl = `https://graph.instagram.com/${instagramUserId}/media?fields=${fields}&access_token=${instagramAccessToken}&limit=6`;

    const response = await fetch(instagramApiUrl);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
    }

    const data: InstagramAPIResponse = await response.json();

    // Transform Instagram data to our format
    const posts = data.data.map((item: InstagramMediaItem) => ({
      id: item.id,
      image_url: item.media_type === 'VIDEO' && item.thumbnail_url ? item.thumbnail_url : item.media_url,
      permalink: item.permalink,
      timestamp: item.timestamp
    }));

    return new Response(
      JSON.stringify({
        success: true,
        posts: posts,
        usingFallback: false
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
      }
    );

  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    
    // Return fallback posts on error
    const fallbackPosts = [
      {
        id: '1',
        image_url: '/images/1181254A-2AD7-45E1-B468-1734239BAD12_4_5005_c.jpeg',
        permalink: 'https://www.instagram.com/barbersebastiantorres/',
        timestamp: new Date().toISOString()
      },
      {
        id: '2',
        image_url: '/images/68B6D779-3A85-4156-8FA0-9E20E9F21FF5_4_5005_c.jpeg',
        permalink: 'https://www.instagram.com/barbersebastiantorres/',
        timestamp: new Date().toISOString()
      },
      {
        id: '3',
        image_url: '/images/F8735A20-DD0A-412D-BAB5-F43F333784F8.jpeg',
        permalink: 'https://www.instagram.com/barbersebastiantorres/',
        timestamp: new Date().toISOString()
      },
      {
        id: '4',
        image_url: '/images/D266C471-DA6C-4442-A194-F905DB37EB0A.jpeg',
        permalink: 'https://www.instagram.com/barbersebastiantorres/',
        timestamp: new Date().toISOString()
      },
      {
        id: '5',
        image_url: '/images/15CCF54C-B40E-472C-84E0-5508CBDAAFDC.png',
        permalink: 'https://www.instagram.com/barbersebastiantorres/',
        timestamp: new Date().toISOString()
      },
      {
        id: '6',
        image_url: '/images/25295758-CF93-432E-BB31-66FE5B44C743.png',
        permalink: 'https://www.instagram.com/barbersebastiantorres/',
        timestamp: new Date().toISOString()
      }
    ];

    return new Response(
      JSON.stringify({
        success: true,
        posts: fallbackPosts,
        usingFallback: true,
        error: error.message
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      }
    );
  }
});