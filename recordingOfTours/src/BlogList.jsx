const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      <h2>All Tours!</h2>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Region: { blog.region }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;