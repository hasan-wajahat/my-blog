import type { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from 'react';

type CustomLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

const CustomLink = ({ children, href }: CustomLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const toSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

const Heading = ({ level, children }: HeadingProps & { level: number }) => {
  const slug = toSlug(String(children));
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag id={slug}>
      <a href={`#${slug}`} className="not-prose">
        {children}
      </a>
    </Tag>
  );
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Code,
    a: CustomLink,
    h1: (props: HeadingProps) => <Heading level={1} {...props} />,
    h2: (props: HeadingProps) => <Heading level={2} {...props} />,
    h3: (props: HeadingProps) => <Heading level={3} {...props} />,
    h4: (props: HeadingProps) => <Heading level={4} {...props} />,
    h5: (props: HeadingProps) => <Heading level={5} {...props} />,
    h6: (props: HeadingProps) => <Heading level={6} {...props} />,
  };
}
