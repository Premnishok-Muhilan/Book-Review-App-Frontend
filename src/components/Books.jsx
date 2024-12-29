import { Link, useLoaderData } from "react-router-dom";

const Books = () => {
  const books = useLoaderData();
  //console.log("books", books);

  return (
    <div className="container mt-5">
      <h1>Books</h1>
      <div className="row mb-3">
        {books.map((book) => (
          <div className="col-md-4 mb-3" key={book._id}>
            <Link
              to={`/dashboard/books/${book._id}`}
              className="text-decoration-none"
            >
              <div className="card">
                <div className="card-body">
                <img
                  src={book.image} // Assuming each book object has an `image` property
                  alt={book.title}
                  className="card-img-top img-fluid" // Use Bootstrap classes for responsiveness
                  style={{
                    height: "250px",
                    objectFit: "contain", // Ensures the image covers the area
                  }}
                />
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.author}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
