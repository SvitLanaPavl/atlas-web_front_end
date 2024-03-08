const changeMode = (size, weight, transform, background, color) => {
  return () => {
    document.body.style.fontStyle = `${size}px`;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  }
}
const main = () => {
  let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // add paragraph
  const para = document.createElement('p');
  const nodePar = document.createTextNode('Welcome Holberton!');
  para.appendChild(nodePar);
  document.body.appendChild(para);

  // add spooky button
  const buttonS = document.createElement('button');
  buttonS.textContent = 'Spooky';
  buttonS.addEventListener('click', spooky);
  document.body.appendChild(buttonS);

  // add dark button
  const buttonD = document.createElement('button');
  buttonD.textContent = 'Dark mode';
  buttonD.addEventListener('click', darkMode);
  document.body.appendChild(buttonD);

  // add scream button
  const buttonScr = document.createElement('button');
  buttonScr.textContent = 'Scream mode';
  buttonScr.addEventListener('click', screamMode);
  document.body.appendChild(buttonScr);
}
main();
