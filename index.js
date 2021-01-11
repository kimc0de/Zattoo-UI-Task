/* Popover when click sort/filter buttons*/

// Get the forms
var sort_form = document.getElementById('sort-form');
var filter_form = document.getElementById('filter-form');

// Get the buttons that opens the forms
var sort_btn = document.getElementById('sort-btn');
var filter_btn = document.getElementById('filter-btn');

// When the user clicks the buttons, open the form
sort_btn.onclick = function() {
  sort_form.style.display = "block";
  sort_btn.style.opacity = "0.8";
}
filter_btn.onclick = function() {
  filter_form.style.display = "block";
  filter_btn.style.opacity = "0.8";
}
// When the user clicks anywhere outside of the forms, close it
window.onclick = function(event) {
  if (event.target == sort_form) {
    sort_form.style.display = "none";
    sort_btn.style.opacity = "1";
  }
  if(event.target == filter_form) {
    filter_form.style.display = "none";
    filter_btn.style.opacity = "1";
  }
}

/* Clear filter when click clear button*/
var clear_btn = document.getElementById('clear-btn');
clear_btn.onclick = function(){
  unCheckAll(document.getElementsByName("check_list"));
}
function unCheckAll(chk)
{
for (i = 0; i < chk.length; i++)
	chk[i].checked = false ;
}
