import { toast } from "react-toastify";

export const saveItemToWatchlist = (e, id) => {
  e.preventDefault();
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));

  if (watchlist) {
    if (!watchlist.includes(id)) {
      watchlist.push(id);
      toast.success(
        `${
          id.substring(0, 1).toUpperCase() + id.substring(1)
        } - adicionado aos favoritos!`
      );
    } else {
      toast.error(
        `${
          id.substring(0, 1).toUpperCase() + id.substring(1)
        } - já foi adicionado aos favoritos!`
      );
    }
  } else {
    watchlist = [id];
    toast.success(
      `${
        id.substring(0, 1).toUpperCase() + id.substring(1)
      } - adicionado aos favoritos!`
    );
  }
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};
