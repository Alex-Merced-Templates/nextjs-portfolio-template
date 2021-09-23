import projects from "../../data/projects.json";

// the logic for where the project prop comes from in getStaticPaths & getStaticProps
export default function Project({ project }) {
  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt={project.name} />
      <a href={project.live}>
        <button>Live Project</button>
      </a>
      <a href={project.github}>
        <button>Live Project</button>
      </a>
    </div>
  );
}

// Generate possible pages with getStaticPaths
export async function getStaticPaths() {
  // generate an array of slugs that determine what goes in the slug param
  const paths = projects.map((project) => {
    return { params: { slug: project.slug } };
  });

  // return paths
  return { paths, fallback: false };
}

// Generate the props for each possible page
export async function getStaticProps(ctx) {
  // get slug from url
  const slug = ctx.params.slug;

  // find the project with matching slug
  const project = projects.find((p) => p.slug === slug);

  // return project as props
  return {
    props: {
      project,
    },
  };
}
