var ps = new ProjectService();

routes.projects = function(id) {
  if (id) {
    var project = ps.byId(id);
    mount('project', { project: project });
  } else {
      var project = ps.all();
      mount('projects', {projects: projects});

  }
}