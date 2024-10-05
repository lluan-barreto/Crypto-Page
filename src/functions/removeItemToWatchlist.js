import { toast } from "react-toastify";

export const removeItemToWatchlist = (e, id, setIsCoinAdded) => {
  e.preventDefault();
  if (window.confirm("Tem certeza de que deseja remover esta moeda?")) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const newList = watchlist.filter((coin) => coin != id);
    setIsCoinAdded(false);
    localStorage.setItem("watchlist", JSON.stringify(newList));
    toast.success(
      `${
        id.substring(0, 1).toUpperCase() + id.substring(1)
      } - foi removido!`
    );
    window.location.reload();
  } else {
    toast.error(
      `${
        id.substring(0, 1).toUpperCase() + id.substring(1)
      } - não foi possível remover!`
    );
    setIsCoinAdded(true);
  }
};
