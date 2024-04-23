const currentLocation = location.href;
const menuItem = document.querySelectAll('a');
const menuLenght = menuItem.length;
for(let i = 0; i <menuLenght; i++){
   if(menuItem[i].href === currentLocation){
        menuItem[i].classname = "active"
    }
}