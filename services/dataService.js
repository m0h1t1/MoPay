import { API_BASE_URL } from "../screens/config";

const apiUrl = `${API_BASE_URL}`; // Adjust this to your backend URL

export const addCards = async (cards) => {
  const response = await fetch(`${apiUrl}/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cards),
  });
  return response.json();
};

export const addCardEarnRates = async (cardEarnRates) => {
  const response = await fetch(`${apiUrl}/card-earn-rates`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cardEarnRates),
  });
  return response.json();
};

export const addSpendBonusCategoryGroups = async (spendBonusCategoryGroups) => {
  const response = await fetch(`${apiUrl}/spend-bonus-category-groups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(spendBonusCategoryGroups),
  });
  return response.json();
};

// Add more methods for other entities as needed
