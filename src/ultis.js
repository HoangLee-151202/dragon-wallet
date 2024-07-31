function capitalizeFirstLetter(string) {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function formattedNumber (value) {
  newValue = value?.toString()?.replace(/[^\d]/g, '');
  const formattedNumber = newValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedNumber;
}

const handleChangeInputNumber = (value) => {
  if (typeof value === 'string') {
    let newValue = value.replace(/[^\d.]/g, '');

    const parts = newValue.split('.');

    if (parts.length > 1) {
      return formattedNumber(parts[0]) + '.' + parts[1];
    }
    return formattedNumber(newValue);
  }

  return 0;
}