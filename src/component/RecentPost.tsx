import blogImg1 from "../styles/assets/img/blog/blog-1.jpg";
import blogImg2 from "../styles/assets/img/blog/blog-2.jpg";
import blogImg3 from "../styles/assets/img/blog/blog-3.jpg";
import authorImg1 from "../styles/assets/img/blog/blog-author.jpg";
import authorImg2 from "../styles/assets/img/blog/blog-author-2.jpg";
import authorImg3 from "../styles/assets/img/blog/blog-author-3.jpg";

type Post = {
  category: string;
  title: string;
  link: string;
  image: string;
  author: string;
  authorImage: string;
  date: string;
};

const posts: Post[] = [
  {
    category: "Politics",
    title: "Dolorum optio tempore voluptas dignissimos",
    link: "blog-details.html",
    image: blogImg1,
    author: "Maria Doe",
    authorImage: authorImg1,
    date: "Jan 1, 2022",
  },
  {
    category: "Sports",
    title: "Nisi magni odit consequatur autem nulla dolorem",
    link: "blog-details.html",
    image: blogImg2,
    author: "Allisa Mayer",
    authorImage: authorImg2,
    date: "Jun 5, 2022",
  },
  {
    category: "Entertainment",
    title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
    link: "blog-details.html",
    image: blogImg3,
    author: "Mark Dower",
    authorImage: authorImg3,
    date: "Jun 22, 2022",
  },
];

export default function RecentPosts() {
  return (
    <section id="recent-posts" className="recent-posts section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent Blog Posts</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
            >
              <article>
                <div className="post-img">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">{post.category}</p>

                <h2 className="title">
                  <a href={post.link}>{post.title}</a>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">{post.author}</p>
                    <p className="post-date">
                      <time
                        dateTime={
                          new Date(post.date).toISOString().split("T")[0]
                        }
                      >
                        {post.date}
                      </time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
