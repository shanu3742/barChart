/**
 *
 * @param {object} object accept data in the form of array of object
 * @example ``` [
	{
		"Label": "A",
		"Value": 25	
	},
	{
		"Label" : "B",
		"Value": 10
	},
]```
 * @returns seprate data in the form of array one is for value and other one for **label**
 */
const convertObjectIntoArray = (object) => {
  let value = [];
  let labelDta = [];

  object.forEach((element) => {
    value.push(element.Value);
    labelDta.push(element.Label);
  });

  return [value, labelDta];
};

function hashCode(str) {
  let hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

/**
 *
 * @param {string} str **default value is `color code`**
 * @param {number} colorvalue **default value is `100`**
 * @returns **return  generated color code  from string**
 */
function pickColor(str = 'color code', colorvalue = 100) {
  // let color = `hsl(${hashCode(str) % 360}, 100%, 90%)`;
  // console.log(color);
  return `hsl(${hashCode(str) % 360}, 100%, ${colorvalue}%)`;
}

export default pickColor;
export { convertObjectIntoArray, pickColor };
