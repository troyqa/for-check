const btn = document.getElementById('btn');
const container = document.getElementById('container');
const input = document.getElementById('text');
const copy = document.getElementById('copy_btn');
const copyMark = document.getElementById('copy_mark');
const copySvg = document.getElementById('svg');

btn.onclick = () => {
  const color1 = Math.floor(Math.random() * 16777215).toString(16);
  const color2 = Math.floor(Math.random() * 16777215).toString(16);
  container.style.backgroundColor = `linear-gradient(#${color1}, #${color2})`;
  console.log((container.style.background = `linear-gradient(#${color1}, #${color2})`));
  input.value = `linear-gradient(#${color1}, #${color2})`;
  copyMark.classList.remove('copy_mark--active');
  copySvg.classList.remove('copy_svg');
  input.classList.remove('text--active');
};

copy.onclick = () => {
  input.select();
  input.contentEditable = true;
  document.execCommand('copy');
  copyMark.classList.add('copy_mark--active');
  copySvg.classList.add('copy_svg');
  input.classList.add('text--active');
};
