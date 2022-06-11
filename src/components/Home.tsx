import Items from "./Items";
import NewItem from "./NewItem";

const Home = (props: any) => {
    return <div className="container">
        <NewItem />
        <Items />
    </div>;
};

export default Home;