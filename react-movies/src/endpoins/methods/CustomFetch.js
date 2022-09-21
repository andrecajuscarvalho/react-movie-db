// mudar tudo para começar por letra minusc que seja func
function CustomFetch({ endpoint_path, setter }) {
  fetch(endpoint_path)
    .then((res) => res.json())
    .then((data) => {
      setter(data.results);
    });
}

export default CustomFetch;
