import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

interface ProjectImageProps {
  src: string;
  alt: string;
  url: string;
  className?: string;
}

const ProjectImage = ({ src, alt, className = "", url }: ProjectImageProps) => (
  <Link
    className={classNames(
      "relative -mt-[30%] sm:-mt-4 md:mt-0 w-[95%] md:w-[60%] shrink-0 rounded-xl overflow-hidden shadow-2xl before:absolute before:inset-0 before:bg-black/20 before:z-10",
      className
    )}
    href={url}
    target="_blank"
  >
    <Image
      title={alt}
      alt={alt}
      src={src}
      width={1200}
      height={630}
      className="lg:group-hover:scale-110 transition-all duration-300 backdrop-blur-xl object-cover w-full h-auto"
    />
  </Link>
);

export default ProjectImage;
