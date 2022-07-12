import React from "react";
import useProjects from "../Hooks/queries/useProjects";
import Loading from "./Loading";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { data, loading, error } = useProjects();

  if (error) return <p>Something went wrong</p>;
  if (loading) return <Loading />;

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>There is no project</p>
      )}
    </>
  );
};

export default Projects;
