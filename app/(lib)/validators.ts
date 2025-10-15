export const isValidEmail = (email: string) => {
  return /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(email.trim());
};

export interface QuickBookingPayload {
  name: string;
  service: string;
  date: string;
  time: string;
}

export const isQuickBookingValid = (payload: QuickBookingPayload) => {
  return Object.values(payload).every((field) => field.trim().length > 0);
};
