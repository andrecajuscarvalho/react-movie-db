const Stars = ({ vote_average }) => {
  let total_stars = 0;
  const solid_star = (key) => {
    return <i key={key} className="fa-solid fa-star fa-xs"></i>;
  };
  const half_solid_star = (
    <i key={-1} className="fa-solid fa-star-half-stroke fa-xs"></i>
  );

  const star = (key) => {
    return <i key={key} className="fa-regular fa-star fa-xs"></i>;
  };

  let final = [];

  if (vote_average === 0) {
    vote_average = "Not Rated";
  } else {
    for (let i = 0; i < parseInt(vote_average, 10); i++) {
      total_stars += 1;
      final.push(solid_star(i));
    }
    if (vote_average % 1 > 0.45) {
      total_stars += 1;
      final.push(half_solid_star);
    }
  }
  for (let i = 0; i < 10 - total_stars; i++) {
    final.push(star(10 + i));
  }

  return <>{final}</>;
};

export default Stars;
