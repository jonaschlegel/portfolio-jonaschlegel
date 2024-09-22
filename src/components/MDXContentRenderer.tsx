'use client';

// Ensure this file is treated as a client component

import type { FC } from 'react';
import { useEffect, useState } from 'react';

interface MDXContentRendererProps {
  contentPath: string;
}

const MDXContentRenderer: FC<MDXContentRendererProps> = ({ contentPath }) => {
  const [MDXContent, setMDXContent] = useState<FC | null>(null);

  useEffect(() => {
    // Dynamically import the MDX file based on the provided path
    const loadMDX = async () => {
      const content = (await import(`@/data/projects/${contentPath}`)).default;
      setMDXContent(() => content);
    };

    loadMDX();
  }, [contentPath]);

  if (!MDXContent) {
    return <p>Loading content...</p>; // Fallback while loading MDX
  }

  return (
    <article className="prose lg:prose-xl">
      <MDXContent />
    </article>
  );
};

export default MDXContentRenderer;
