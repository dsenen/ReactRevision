import FilterableProductTable from "../Components/FilterableProductTable";
import PRODUCTS from "../products";


const Home = () => {
    return (
      <div>
        <h1>Home</h1>
        <h2>This is React Router</h2>
        <p>I tried <a href="https://v5.reactrouter.com/web/guides/primary-components" target="_blank" rel="noreferrer">this example</a> from Codecademy, but it is outdated, as it is using the V5 of react.</p>
        <p><a href="https://www.w3schools.com/react/react_router.asp" target="_blank" rel="noreferrer">https://www.w3schools.com/react/react_router.asp</a></p>
        <h2>This is Thinking in React</h2>
        <p>From this <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank" rel="noreferrer">website</a></p>

        <FilterableProductTable products={PRODUCTS}/>

      </div>
    );
  };
  
  export default Home;