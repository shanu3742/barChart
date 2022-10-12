const convertObjectIntoArray = (object) => {
  let value = [];
  let labelDta = [];

  object.forEach((element) => {
    value.push(element.Value);
    labelDta.push(element.Label);
  });

  return [value, labelDta];
};
export { convertObjectIntoArray };
