import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useGlobalContext } from "./GlobalContext";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.error) {
    return (
      <section className="image-container">
        <h4>There was an error</h4>
      </section>
    );
  }
  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>Sorry! no images found</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((image) => {
        const url = image?.urls?.regular;
        return (
          <img
            src={url}
            key={image.id}
            alt={image.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
