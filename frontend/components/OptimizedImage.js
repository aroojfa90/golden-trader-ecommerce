import Image from 'next/image';

export default function OptimizedImage({ src, alt, ...props }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={500}
      height={500}
      layout="responsive"
      {...props}
    />
  );
} 