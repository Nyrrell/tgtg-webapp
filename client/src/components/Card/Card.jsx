import { card, card_img } from "./Card.module.css"
import item from "../../../itemExample.json"

export function Card() {
  console.log(item);
  return (
    <div className={card}>
      <img className={card_img} src={item.store.cover_picture.current_url} />
      <p>{item.display_name}</p>
    </div>
  );
}
