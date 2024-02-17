import dude from "../../images/dude.jpg"

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'Description 1', imgUrl: dude, deployUrl: 'url-to-deploy-1', repoUrl: 'url-to-repo-1' },
    { name: 'Project 2', description: 'Description 2', imgUrl: dude, deployUrl: 'url-to-deploy-2', repoUrl: 'url-to-repo-2' },
    { name: 'Project 3', description: 'Description 3', imgUrl: dude, deployUrl: 'url-to-deploy-2', repoUrl: 'url-to-repo-2' },
    { name: 'Project 4', description: 'Description 2', imgUrl: dude, deployUrl: 'url-to-deploy-2', repoUrl: 'url-to-repo-2' },
    { name: 'Project 5', description: 'Description 2', imgUrl: dude, deployUrl: 'url-to-deploy-2', repoUrl: 'url-to-repo-2' },
    { name: 'Project 6', description: 'Description 2', imgUrl: dude, deployUrl: 'url-to-deploy-2', repoUrl: 'url-to-repo-2' },

    // Add more projects here...
  ];
  return (
    <div className="container mt-5">
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-12">
            <div className="card">
              <img src={project.imgUrl} className="card-img-top" alt={project.name} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.deployUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Site</a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Repo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects