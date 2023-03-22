import React from 'react'
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Ratings = ({score}) => {
    const comps = [];
    for(let i=0;i<score;i++){
        comps.push(<FavoriteIcon />)
    }
    for(let i = score; i<4;i++){
        comps.push(<FavoriteBorderIcon />)
    };
    console.log(comps)

  return (
    <div className="flex mx-2 py-2">
      {comps.map((stuff) => stuff)}
      <span>({Math.round(Math.random() * 1000)})</span>
    </div>
  );
}

export default Ratings