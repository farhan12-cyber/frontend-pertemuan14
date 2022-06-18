import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
function Home() {
    
    return(
        <div>
            <main>
                <Hero />
                <Movies title ='Latest Movies'/>
            </main>
        </div>
    );
}

export default Home;