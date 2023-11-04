import type { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

type CustomLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const CustomLink = ({ children, href }: CustomLinkProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Code,
    a: CustomLink,
  };
}
