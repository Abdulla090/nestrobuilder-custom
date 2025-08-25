import type { Metadata } from "next"
import ProjectsContent from "@/components/projects-content"
import ServiceLayout from "@/components/service-layout"

export const metadata: Metadata = {
  title: "Projects | Nestro Builder",
  description: "Explore our portfolio of successful projects across various industries and technologies",
}

export default function ProjectsPage() {
  return (
    <ServiceLayout>
      <ProjectsContent />
    </ServiceLayout>
  )
}
