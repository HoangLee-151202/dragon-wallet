function capitalizeFirstLetter(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function formattedNumber (value) {
  newValue = value?.toString()?.replace(/[^\d]/g, '');
  const formattedNumber = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedNumber;
}