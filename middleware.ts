import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

type CspDirective = {
  name: string;
  values: string[];
};

function formatContentSecurityPolicyHeader(cspDirectives: CspDirective[]) {
  return cspDirectives
    .map((directive) => {
      return `${directive.name} ${directive.values
        .filter((value) => typeof value === 'string')
        .join(' ')}`;
    })
    .join('; ');
}

function generateCspHeaderAndNonce() {
  const nonce = crypto.randomUUID();

  return {
    nonce,
    cspHeader: formatContentSecurityPolicyHeader([
      { name: 'default-src', values: ["'self'"] },
      {
        name: 'script-src',
        values: [
          "'self'",
          ...(process.env.NODE_ENV === 'development'
            ? [
                "'unsafe-eval'",
                "'unsafe-inline'",
                'https://assets.calendly.com/',
                'https://cdn-cookieyes.com',
                'https://client.crisp.chat/',
                'https://*.googletagmanager.com/',
              ]
            : [
                `'nonce-${nonce}'`,
                "'strict-dynamic'",
                "'unsafe-inline'",
                'https:',
              ]),
          'https://snap.licdn.com/',
        ],
      },
      {
        name: 'style-src',
        values: ["'self'", "'unsafe-inline'", 'https://assets.calendly.com/'],
      },
      {
        name: 'connect-src',
        values: [
          "'self'",
          'https://*.cookieyes.com',
          'wss://client.relay.crisp.chat/',
          'https://*.google-analytics.com/',
          'https://www.facebook.com/',
        ],
      },
      {
        name: 'img-src',
        values: ["'self'", 'blob:', 'data:', 'https://assets.calendly.com/'],
      },
      { name: 'font-src', values: ["'self'", 'data:'] },
      { name: 'frame-src', values: ['https://calendly.com/'] },
      { name: 'frame-ancestors', values: ["'none'"] },
      { name: 'object-src', values: ["'none'"] },
      { name: 'base-uri', values: ["'none'"] },
      { name: 'form-action', values: ["'self'"] },
    ]),
  };
}

export function middleware(request: NextRequest) {
  const { cspHeader, nonce } = generateCspHeaderAndNonce();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  requestHeaders.set('Content-Security-Policy', cspHeader);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()',
  );
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload',
  );
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-Frame-Options', 'DENY');

  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
