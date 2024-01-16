import Link from "next/link";
import { FC } from "react";
import gameCardClassNames from "./GameCardClassNames";
import Image from "next/image";

interface GameCardProps{
    gameName: string;
    imageUrl: string;
    slug: string;
    price: number;
}
const GameCard: FC<GameCardProps> =(props) =>{
   const {
  
    gameName,
    imageUrl,
    slug,
    price
   } = props

    return (
       <Link href ={`/games/${slug}`} className={gameCardClassNames.container}> 
          <h3 className={gameCardClassNames.price}>
            {price}$
          </h3>
          <Image className={gameCardClassNames.image} src={imageUrl} alt={gameName} width={200} height={200}/>
          <div className={gameCardClassNames.gameName}>
           {gameName}
          </div>
       </Link>
    )
}

export default GameCard;