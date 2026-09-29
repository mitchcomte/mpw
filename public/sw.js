self.addEventListener('push',event=>{
  let data={};
  try{data=event.data?event.data.json():{}}catch{data={title:'My Portland Wedding',body:event.data?.text()||'You have a new Wedding Builder update.'}}
  const title=data.title||'My Portland Wedding';
  const options={
    body:data.body||'You have a new Wedding Builder update.',
    icon:'/icon-192.png',
    badge:'/icon-192.png',
    tag:data.tag||'mpw-vendor',
    renotify:true,
    data:{url:data.url||'/vendor/dashboard'},
    vibrate:[120,70,120]
  };
  event.waitUntil(self.registration.showNotification(title,options));
});
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const url=new URL(event.notification.data?.url||'/vendor/dashboard',self.location.origin).href;
  event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const c of list){if('focus' in c && c.url.startsWith(self.location.origin)){c.navigate(url);return c.focus()}}
    if(clients.openWindow)return clients.openWindow(url);
  }));
});
