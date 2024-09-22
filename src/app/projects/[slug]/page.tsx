import { projectsData } from '@/data/content';
import type { ProjectType } from '@/types/global';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project: ProjectType | undefined = projectsData.projectsList.find(
    (proj) => proj.slug === params.slug,
  );

  if (!project) {
    notFound();
  }
  const MDXContent = (await import(`@/data/projects/${project.slug}.mdx`))
    .default;

  return (
    <div className="container mx-auto py-16">
      <Image
        src={project?.image}
        alt={project?.name}
        width={800}
        height={600}
        className="my-8"
      />
      <h1 className="text-2xl font-bold">{project?.name}</h1>

      <MDXContent />
    </div>
  );
}
