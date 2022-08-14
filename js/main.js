const div_1 = document.createElement('div');
const div_2 = document.createElement('div');
div_1.id = 'parentCanvas';
div_2.id = 'childCanvas';
div_1.appendChild(div_2);
document.body.appendChild(div_1);