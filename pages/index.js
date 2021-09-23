import projects from "../data/projects.json";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu
        dictum varius duis. A diam maecenas sed enim ut sem. Tortor aliquam
        nulla facilisi cras fermentum odio. Facilisi nullam vehicula ipsum a
        arcu cursus vitae. Scelerisque eleifend donec pretium vulputate sapien.
        Amet mattis vulputate enim nulla aliquet porttitor lacus. Amet porttitor
        eget dolor morbi. Pretium fusce id velit ut tortor pretium. Tristique
        sollicitudin nibh sit amet. Diam phasellus vestibulum lorem sed risus
        ultricies tristique. Venenatis tellus in metus vulputate eu scelerisque
        felis imperdiet proin. Amet luctus venenatis lectus magna. Gravida neque
        convallis a cras semper auctor neque. At imperdiet dui accumsan sit amet
        nulla facilisi morbi tempus. Lacinia quis vel eros donec ac. Faucibus
        nisl tincidunt eget nullam non. Sagittis id consectetur purus ut
        faucibus pulvinar elementum integer enim. Lacus suspendisse faucibus
        interdum posuere lorem ipsum. Ornare quam viverra orci sagittis eu
        volutpat. Praesent semper feugiat nibh sed pulvinar proin gravida
        hendrerit. Libero nunc consequat interdum varius sit. Tellus
        pellentesque eu tincidunt tortor aliquam nulla facilisi. Dui ut ornare
        lectus sit amet est placerat. Ipsum dolor sit amet consectetur
        adipiscing elit.
      </p>
      <h3>My Projects</h3>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <Link href={`/projects/${project.slug}`}>{project.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
