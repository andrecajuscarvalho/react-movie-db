const Stars = ({ vote_average }) => {
  const solid_star = <i className="fa-solid fa-star fa-2xs"></i>;
  const half_solid_star = (
    <i className="fa-solid fa-star-half-stroke fa-2xs"></i>
  );
  let final = [];

  if (vote_average === 0) {
    vote_average = "Not Rated";
  } else {
    for (let i = 0; i < parseInt(vote_average, 10); i++) {
      final.push(solid_star);
    }
    if (vote_average % 1 > 0.45) {
      final.push(half_solid_star);
    }
  }

  return (
    <>
      {final}(<small>{vote_average}</small>)
    </>
  );
};

export default Stars;
