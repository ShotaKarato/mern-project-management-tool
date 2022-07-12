import React from "react";
import { Link, useParams } from "react-router-dom";
import ClientInfo from "../components/ClientInfo";
import Loading from "../components/Loading";
import { useProject } from "../Hooks/queries";

const Project = () => {
  const { id } = useParams();
  const { data, loading, error } = useProject(id);

  if (error) return <p>Sorry something went wrong</p>;
  if (loading) return <Loading />;

  return (
    <div className="mx-auto w-75 card p-5">
      <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
        Back
      </Link>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <h5 className="mt-3">Project Status</h5>
      <p className="lead">{data.project.status}</p>
      <ClientInfo client={data.project.client} />
    </div>
  );
};

export default Project;
