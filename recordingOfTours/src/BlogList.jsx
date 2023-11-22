const BlogList = ({ tours }) => {
  return (
    <div className="blog-list">
      <h2>All Tours!</h2>
      {tours.map(tour => (
        <div className="blog-preview" key={tour.id} >
          <h2>{ tour.title }</h2>
          <p>Region: { tour.region }</p>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;