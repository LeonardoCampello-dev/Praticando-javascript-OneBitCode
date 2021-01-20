function show() {
  const elementById = document.getElementById("name");
  console.log(elementById.value);

  const elementsByName = document.getElementsByName("phone");
  console.log(elementsByName[0].value);

  const elementsByQuerySelector = document.querySelectorAll(
    'div#phones input[name="phone"]'
  );
  console.log(`
        Phone 01: ${elementsByQuerySelector[0].value} 
        Phone 02: ${elementsByQuerySelector[1].value}
    `);

  const elementsByTagName = document.getElementsByTagName("input");
  console.log(elementsByTagName);
}
