// pages/movie/[id].js
import { useRouter } from 'next/router';
import { useGetDetailMovie } from '@/hooks/useMovies';
import DetailMovie from '@/components/DetailMovie';

const MovieDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dataMovie = useGetDetailMovie(id);
  const sinopsis = "Sinopsis film ini ...";
  const infoFilm = "Info film ini ...";
  const ulasan = "Ulasan film ini ...";
  const karakter = "Karakter film ini ...";

  if (!dataMovie) {
    return <p>Loading...</p>;
  }

  function DetailMovie({ sinopsis, infoFilm, ulasan, karakter }) {
    return (
      <div>
        <h1>Sinopsis</h1>
        <p>{sinopsis}</p>
  
        <h1>Info Film</h1>
        <p>{infoFilm}</p>
  
        <h1>Ulasan</h1>
        <p>{ulasan}</p>
  
        <h1>Karakter</h1>
        <p>{karakter}</p>
      </div>
    );
  }
  <DetailMovie movie={dataMovie} />;
  <div>
      {/* Meneruskan prop-prop ke komponen DetailMovie */}
      <DetailMovie
        sinopsis={sinopsis}
        infoFilm={infoFilm}
        ulasan={ulasan}
        karakter={karakter}
      />
    </div>
  </>
  
};

export default MovieDetailPage;
