function saludar(hour){
if (hour == null || hour == ""){
	window.alert('Por favor, añade la hora')}


else if (hour >= 6 && hour <= 12) {
window.alert ('Good Morning')
}
else if ( hour > 12 && hour <= 18 ) {
window.alert ('Good Afternoon')
}
else
window.alert ('Good Evening');
}
saludar(prompt('¿Qué hora es?'));
