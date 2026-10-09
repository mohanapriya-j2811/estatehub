export const formatPrice = (n, status) => {
  let v;
  if (n >= 10000000) v = `₹${(n / 10000000).toFixed(2)} Cr`;
  else if (n >= 100000) v = `₹${(n / 100000).toFixed(1)} L`;
  else v = `₹${n.toLocaleString("en-IN")}`;
  return status === "Rent" ? `${v}/mo` : v;
};

export const FALLBACK_IMG =
  "https://placehold.co/900x600/e8efff/1e5eff?text=EstateHub";

export const onImgError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = FALLBACK_IMG;
};