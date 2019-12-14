export const getEnvs = () => ({
  API_DOMAIN: `http://localhost:8080`
});

export const formatTimeByHours = (
  time = 0,
  format = {
    hh: ":",
    mm: ""
  }
) => {
  if (isNaN(time)) {
    return `00${format.hh}00${format.mm}`;
  }
  const today = new Date(time * 1000);
  const hh = String(today.getHours()).padStart(2, "0");
  const mm = String(today.getMinutes()).padStart(2, "0"); //January is 0!
  return `${hh}${format.hh}${mm}${format.mm}`;
};

export const formatTimeByDate = (
  time = 0,
  format = {
    dd: "/",
    MM: "/"
  }
) => {
  if (isNaN(time)) {
    return `00${format.dd}00${format.MM}00`;
  }
  const today = new Date(time * 1000);
  const dd = String(today.getDate()).padStart(2, "0");
  const MM = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const YYYY = today.getFullYear();
  return `${dd}${format.dd}${MM}${format.MM}${YYYY}`;
};

export const formatCurrency = (cur: number) => {
  if (isNaN(cur)) {
    return `0`;
  }
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(cur);
};
