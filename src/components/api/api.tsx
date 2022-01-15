import { TIngredient, TResponseBody } from "../../utils/types";

export const apiConfig = {
  ingredientsUrl: `https://norma.nomoreparties.space/api/ingredients`,
  ordersUrl: `https://norma.nomoreparties.space/api/orders`,
  headers: {
    "Content-Type": "application/json",
  },
};
const getResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res.status);
};

export const getIngredients = (): Promise<
TResponseBody<'data', TIngredient[]>
> => {
  return fetch(apiConfig.ingredientsUrl, {
    headers: apiConfig.headers,
  }).then(getResponse);
};

export const submitOrder = (userOrder: string[]) => {
  return fetch(apiConfig.ordersUrl, {
    method: "POST",
    headers: apiConfig.headers,
    body: JSON.stringify({
      ingredients: userOrder,
    }),
  }).then(getResponse);
};
