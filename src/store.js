import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  card: [],
  paginationInfo: {},
  currentPage: 1,
  isLoading: false,
});

export function fetchCards(nextUrl, prevUrl) {
  store.isLoading = true;

  const urlNext = nextUrl ? nextUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";
  const urlPrev = prevUrl ? prevUrl : "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

  axios.get(urlNext, urlPrev).then((response) => {
    store.cards = response.data.data;
    store.paginationInfo = response.data.meta;

    setTimeout(() => {
      store.isLoading = false;
    }, 1000);
  });
}