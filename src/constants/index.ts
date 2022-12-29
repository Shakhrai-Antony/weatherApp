const currentDate = new Date();
export const todayDate = new Date(
  currentDate.setDate(currentDate.getDate() - currentDate.getDay()),
)
  .toISOString()
  .split('T')[0];
export const lastDayDate = new Date(
  currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 6),
)
  .toISOString()
  .split('T')[0];

export const uuid = () => {
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substring(2);
  return uniqueId;
};

export const currentHour = currentDate.getHours();
