import style from "./Card.module.css";
import { pickupDate } from "../../utils/pickupDate.js";
import { localePrice } from "../../utils/localePrice.js";

export function Card({ item }) {
  console.log(item);
  const itemsAvailable = Boolean(item.items_available > 0);

  let pickupInterval = "Rien à sauver aujourd'hui";
  if (Boolean(item.items_available)) {
    const pickupStart = new Date(item.pickup_interval?.start);
    const pickupEnd = new Date(item.pickup_interval?.end);
    pickupInterval = pickupDate(pickupStart, pickupEnd);
  }

  const price = localePrice(item.item.price_including_taxes);

  return (
    <div className={style.card}>
      <div className={`${style.card_top} ${!itemsAvailable && style.empty}`}>
        <img
          className={style.card_cover}
          src={item.store.cover_picture.current_url}
        />
        <div className={style.items_number}>
          {itemsAvailable
            ? `${item.items_available} à sauver`
            : "Pas de paniers"}
        </div>
        <div className={style.store}>
          <img
            className={style.store_logo}
            src={item.store.logo_picture.current_url}
          />
          <p className={style.store_name}>{item.store.store_name}</p>
        </div>
      </div>
      <div className={style.card_bottom}>
        <p className={style.item_name}>
          {item.item.name || "Panier anti-gaspi"}
        </p>
        <p className={style.pickup}>{pickupInterval}</p>
        <p className={style.price}>{price}</p>
      </div>
    </div>
  );
}
