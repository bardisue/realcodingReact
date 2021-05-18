function CityList(props){

  const { cities } = props;
  const link = cities.map((cities) => "https://www.google.com/search?q="+cities);
  const style = {
    padding: '5px 5px 5px 5px',
    marginBottom: '5px',
    borderBottom: '5px solid #efefef',
    backgroundColor: '#f9f9f9'
  }

  return (
    <div style = {style}>
      <h1>CityList</h1>
      <ul>
        {link.map((link, index) => {
          return <li key ={index}><a href={link} target="_blank">{cities[index]}</a></li>;
        })}
      </ul>
    </div>
  );
}

export default CityList;
