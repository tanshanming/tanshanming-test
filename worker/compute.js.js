var i=0; 

 function timedCount(){ 
     for(var j=0,sum=0;j<100;j++){ 
         for(var i=0;i<1000000;i++){ 
             sum+=i; 
         } 
     } 
     // 调用 postMessage 向主线程发送消息
     postMessage(sum); 
 } 

 postMessage("获取计算之前的时间,"+new Date()); 
 timedCount(); 
 postMessage("获取计算之后的时间,"+new Date());