import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  card: [],
  paginationInfo: {},
  currentPage: 1,
  isLoading: false,
});

export function fetchCards(nextUrl) {
  store.isLoading = true;

  const url = nextUrl ? nextUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

  axios.get(url).then((response) => {
    store.cards = response.data.data;
    store.paginationInfo = response.data.meta;

    setTimeout(() => {
      store.isLoading = false;
    }, 1000);
  });
}