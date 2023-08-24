import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  card: [],
});

export function fetchCards() {
  const url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

  axios.get(url).then((response) => {
    store.cards = response.data.data;
  });
}