$(document).ready(function(){
  $("#generate-pwd-button").click(function(){
    const shuffle = str => [...str].sort(()=>Math.random()-.5).join('');
    const list = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!/@#$%&*?][)(";
    const new_list = shuffle(list);
    const length = Math.floor(Math.random() * (20 - 12 + 1)) + 12;
    $("#pwd-result").val(new_list.slice(0,length));
    $("#copy-button").html(
      '<i class="bi bi-copy"></i>'+
      '<p>copy</p>'
    );
  });
  function copyText() { 
    const text = $("#pwd-result").val();
    navigator.clipboard.writeText (text);   
  }
  $("#copy-button").click(function(){
    copyText();
    $("#copy-button").html(
      '<i class="bi bi-clipboard2-check"></i>'+
      '<p>copied</p>'
    );
  })

});