


 const addTheRecentFbPost = function(){
 const lnk = document.createElement('iframe');
 lnk.setAttribute('id', 'lnk');
 lnk.src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmeta&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId" ;
 document.body.querySelector('div').prepend(lnk);
 lnk.autoPlay = true
 }


addTheRecentFbPost()

