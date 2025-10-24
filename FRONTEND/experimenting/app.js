// let cont=document.querySelector(".container");
const container = document.body;  
 let color=['rgb(0, 0, 0)', 'rgb(34, 34, 34)', 'rgb(248, 251, 255)', 'rgb(8, 10, 12)', 'rgb(102, 102, 102)', 'rgb(34, 34, 34) rgba(8, 10, 12, 0.176) rgb(34, 34, 34) rgb(34, 34, 34)', 'rgba(0, 0, 0, 0)', 'rgb(214, 228, 247) rgb(34, 34, 34) rgb(34, 34, 34)', 'rgb(255, 255, 255)', 'rgb(1, 87, 203)', 'rgb(204, 221, 245)', 'rgb(56, 142, 255)', 'rgb(1, 65, 152)', 'rgb(119, 119, 119)', 'rgb(1, 87, 203) rgba(0, 0, 0, 0) rgb(1, 87, 203) rgb(1, 87, 203)', 'rgba(245, 250, 255, 0.263)', 'rgb(1, 44, 102)', 'rgb(245, 250, 255)', 'rgb(245, 167, 65)', 'rgb(96, 165, 255)', 'rgb(0, 37, 87)', 'rgb(235, 241, 251)', 'rgb(245, 250, 255) rgba(0, 0, 0, 0) rgb(245, 250, 255) rgb(245, 250, 255)', 'rgb(184, 214, 255)', 'rgba(1, 89, 203, 0.518)', 'rgb(51, 51, 51)', 'rgb(242, 145, 17)', 'rgb(204, 204, 204)', 'rgb(68, 68, 68)', 'rgb(198, 222, 255)', 'rgb(219, 223, 230) rgb(245, 250, 255) rgb(245, 250, 255)', 'rgb(214, 228, 247)', 'rgba(8, 10, 12, 0.176)'];
for (let i = 0; i <= 32; i++) {
  const div = document.createElement('div');
  div.style.backgroundColor = color[i];
  div.style.width = '100px';
  div.style.height = '100px';
  div.style.display = 'inline-block';
  container.appendChild(div);
}
 