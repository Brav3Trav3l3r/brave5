import Trending from "./Trending";
import Popular from "./Popular";
import Anchor from "./Anchor";
export const revalidate = 60;

const Home = () => {
    return ( 
        <div className="home px-2 space-y-8">
            <Popular/>
            <Trending/>
        </div>
     );
}
 
export default Home;