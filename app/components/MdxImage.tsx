// Purely there to handle this issue in Next:
// https://github.com/vercel/next.js/issues/58888
// https://github.com/hashicorp/next-mdx-remote/issues/405
import Image, { ImageProps } from 'next/image';

export function MdxImage(props: ImageProps) {
  return <Image {...props} alt={props.alt} />;
}
