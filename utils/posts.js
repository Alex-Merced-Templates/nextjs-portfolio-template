import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked"

// function to sort posts by date
const sortOrder = (x, y) => {
  return new Date(y.frontmatter.published) - new Date(x.frontmatter.published);
};

// function that returns array of parsed posts
export const getPosts = () => {

  // get list of all files from blogs directory
  const files = fs.readdirSync(path.join("data/blogs"));

  // get the frontmatter for each post
  const posts = files.map((filename) => {
    // generate path to file
    const filepath = path.join("data/blogs", filename);
    // read the file
    const markdown = fs.readFileSync(filepath, "utf-8");
    // parse the frontmatter and content
    const { data, content } = matter(markdown);
    // return the post object with the frontmatter and content parsed into html
    return { frontmatter: data, content: marked(content) };
  });

  // return posts sorted by date
  return posts.sort(sortOrder)
};
