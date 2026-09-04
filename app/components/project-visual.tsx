import Image from "next/image";

interface ProjectVisualProps {
  image: { src: string; alt: string; width: number; height: number };
  priority?: boolean;
}

export function ProjectVisual({ image, priority = false }: ProjectVisualProps) {
  return (
    <figure className="project-visual">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        quality={90}
        priority={priority}
        sizes="(max-width: 720px) 100vw, (max-width: 1000px) 65vw, 42vw"
      />
    </figure>
  );
}
