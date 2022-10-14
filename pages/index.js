import Seo from "../components/Seo";
import {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";


export default function Home({results}) {
useEffect(()=>{
  console.log('client에서 요청')
  //client에서 요청하는 것이기 때문에 server console에 안뜬다
})

  const router = useRouter();
  const onClick= (id, title)=>{
    router.push({
      pathname : `/movies/${id}`,
      query: {
        title
      },
    },`/movies/${id}`)
  }

    return (
    <div className="container">
        <Seo title='Home'/>
        {
          results?.map((movie)=>(
            <div onClick={()=>onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
              <Link href={{
                pathname : `/movies/${movie.id}`,
                query: {
                  title : movie.original_title
                },
              }}
              as={`movies/${movie.id}`}>
                <a><h4>{movie.original_title}</h4></a>
              </Link>
            </div>
            ))
        }
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
        cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//이름 바꾸면안됨 + client에는 보여지지 않는다.
export async function getServerSideProps() {
  console.log("server")
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}