// page.tsx
import ProjectClient from "./ProjectClient";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface PageParams {
  slug: string;
}

interface PageProps {
  params: Promise<PageParams>; // Change here to match the expected type
}

// 1️⃣ Static generation: Next.js needs this
export async function generateStaticParams(): Promise<PageParams[]> {
  return projects.map((p) => ({ slug: p.id }));
}

// 2️⃣ Server component passes project data to client
export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params; // Await the params

  const project = projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return <ProjectClient project={project} />;
}