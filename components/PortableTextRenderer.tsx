'use client';

import { PortableText } from '@portabletext/react';

interface Props {
  value: any;
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => <h2 className="articleSubHeading">{children}</h2>,
    h3: ({ children }: any) => <h3 className="articleSubSubHeading">{children}</h3>,
    blockquote: ({ children }: any) => (
      <blockquote className="articleBlockquote">{children}</blockquote>
    ),
    normal: ({ children }: any) => <p className="articleParagraph">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="articleBulletList">{children}</ul>,
    number: ({ children }: any) => <ol className="articleNumberList">{children}</ol>,
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      const target = !value.href.startsWith('/') ? '_blank' : undefined;
      return (
        <a href={value.href} target={target} rel={rel} className="articleLink">
          {children}
        </a>
      );
    },
  },
};

export default function PortableTextRenderer({ value }: Props) {
  if (!value) return null;

  // If value is array of strings (fallback mode)
  if (Array.isArray(value) && typeof value[0] === 'string') {
    return (
      <div className="articleBodyFlow">
        {value.map((paragraph: string, idx: number) => (
          <p key={idx} className="articleParagraph">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  // If value is Sanity PortableText
  return (
    <div className="articleBodyFlow">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}
