import style from "./Card.module.css";
import { pickupDate } from "../../utils/pickupDate.js";
import { localePrice } from "../../utils/localePrice.js";

export function Card({ item }) {
  console.log(item);
  const itemsAvailable = Math.random() < 0.5; //Boolean(item.items_available > 0);

  const pickupStart = new Date(item.pickup_interval.start);
  const pickupEnd = new Date(item.pickup_interval.end);
  const pickupInterval = pickupDate(pickupStart, pickupEnd);
  const price = localePrice(item.item.price_including_taxes);

  return (
    <div className={style.card}>
      <div className={`${style.card_top} ${!itemsAvailable && style.empty}`}>
        <img
          className={style.card_cover}
          src={item.store.cover_picture.current_url}
        />
        <p className={style.items_number}>
          {itemsAvailable
            ? `${item.items_available} à sauver`
            : "Pas de paniers"}
        </p>
        <div className={style.store}>
          <img src={item.store.logo_picture.current_url} />
          <p>{item.display_name}</p>
        </div>
      </div>
      <div className={style.card_bottom}>
        <p style={{ fontSize: "0.8rem", fontWeight: 600 }}>Panier anti-gaspi</p>
        <p className={style.pickup}>{pickupInterval}</p>
        <p className={style.price}>{price}</p>
      </div>
    </div>
  );
}
