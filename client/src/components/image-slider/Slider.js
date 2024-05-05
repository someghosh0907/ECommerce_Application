import ImageSlider from "./Img-slider";

function App() {
  const slides = [
    {
      url: "https://a.ipricegroup.com/media/1Ly/20201014_021_1600x.jpg",
      title: "Chelsea",
    },
    {
      url: "https://media.gq-magazine.co.uk/photos/609e3f7c7c4de40838d62767/16:9/w_2560%2Cc_limit/140532021_Dave_01.jpg",
      title: "Sports",
    },
    {
      url: "https://www.tresmode.com/cdn/shop/articles/Banner_508d0eaa-694c-43c8-af33-46ab7c5907d4.jpg?v=1693056982&width=1500",
      title: "Formal",
    },
  ];
  const containerStyles = {
    width: "1400px",
    height: "800px",
    margin: "0px 0px auto",
    marginBottom: "50px"
  };
  return (
    <div className="App">
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default App;
