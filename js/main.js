const div_1 = document.createElement('div');
const div_2 = document.createElement('div');
div_1.id = 'parentCanvas';
div_2.id = 'childCanvas';
div_1.className = 'mt-8 mr-8 container mx-auto'
div_2.className = 'pr-8';
div_1.appendChild(div_2);
document.body.appendChild(div_1);