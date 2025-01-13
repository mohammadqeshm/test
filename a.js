// ایجاد نقشه Leaflet
var map = L.map('map').setView([27, 55], 8);

// اضافه کردن لایه OpenStreetMap
var Stadia_AlidadeSmooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(map)

    // داده‌های GeoJSON شامل خطوط (LineString)
    var streets = [
      { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[-0.09, 51.505], [-0.1, 51.51]] }, "properties": { "name": "خیابان ۱", "pci": 85 } },
      { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[-0.08, 51.505], [-0.09, 51.51]] }, "properties": { "name": "خیابان ۲", "pci": 45 } },
      { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[-0.1, 51.505], [-0.11, 51.51]] }, "properties": { "name": "خیابان ۳", "pci": 60 } },
      { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[-0.07, 51.505], [-0.08, 51.51]] }, "properties": { "name": "خیابان ۴", "pci": 30 } },
      { "type": "Feature", "geometry": { "type": "LineString", "coordinates": [[-0.11, 51.505], [-0.12, 51.51]] }, "properties": { "name": "خیابان ۵", "pci": 90 } }
    ];

    // اضافه کردن GeoJSON به نقشه

    




    //add geojson



    async function gg(params) {
      let data=await fetch("./road3.geojson")
      let res=await data.json()
      let geo=res.features
console.log(geo[0].properties.Road_Type);


    let layer01=  L.geoJSON(geo, {
        style: function (feature) {
          // استایل خطوط بر اساس مقدار PCI
          var pci = feature.properties.Road_Type;
          let a="black"
          if (pci=="Normal Road") {
             return { color: "green", weight: 4 };
          }else if(pci=="Narrow Road"){
            return { color: "red", weight: 4 };
          }else if(pci=="ZC"){
            return { color: "orange", weight: 4 };
          }
          else{
            return { color: "black", weight: 4 };

          }


         
        },
        onEachFeature: function (feature, layer) {
          // افزودن رویداد کلیک برای هر خط
          layer.on('click', function () {
            var name = feature.properties.Road_Type;
            alert("وضعیت: " + name);
          });
        }
      })


      let layer02=  L.geoJSON(geo, {
        style: function (feature) {
          // استایل خطوط بر اساس مقدار PCI
          var pci = feature.properties.Road_Type;
  
          if (pci=="Normal Road") {
             return { color: "transparent", weight: 4 };
          }else if(pci=="Narrow Road"){
            return { color: "transparent", weight: 4 };
          }else if(pci=="ZC"){
            return { color: "orange", weight: 4 };
          }
          else{
            return { color: "transparent", weight: 4 };

          }


         
        },
        onEachFeature: function (feature, layer) {
          // افزودن رویداد کلیک برای هر خط
          layer.on('click', function () {
            var name = feature.properties.Road_Type;
            alert("وضعیت: " + name);
          });
        }
      })

      let layer03=  L.geoJSON(geo, {
        style: function (feature) {
          // استایل خطوط بر اساس مقدار PCI
          var pci = feature.properties.Road_Type;
          let a="black"
          if (pci=="Normal Road") {
             return { color: "transparent", weight: 4 };
          }else if(pci=="Narrow Road"){
            return { color: "red", weight: 4 };
          }else if(pci=="ZC"){
            return { color: "transparent", weight: 4 };
          }
          else{
            return { color: "transparent", weight: 4 };

          }


         
        },
        onEachFeature: function (feature, layer) {
          // افزودن رویداد کلیک برای هر خط
          layer.on('click', function () {
            var name = feature.properties.Road_Type;
            alert("وضعیت: " + name);
          });
        }
      })

      let layer04=  L.geoJSON(geo, {
        style: function (feature) {
          // استایل خطوط بر اساس مقدار PCI
          var pci = feature.properties.Road_Type;
          let a="black"
          if (pci=="Normal Road") {
             return { color: "green", weight: 4 };
          }else if(pci=="Narrow Road"){
            return { color: "transparent", weight: 4 };
          }else if(pci=="ZC"){
            return { color: "transparent", weight: 4 };
          }
          else{
            return { color: "transparent", weight: 4 };

          }


         
        },
        onEachFeature: function (feature, layer) {
          // افزودن رویداد کلیک برای هر خط
          layer.on('click', function () {
            var name = feature.properties.Road_Type;
            alert("وضعیت: " + name);
          });
        }
      })

      let layer05=  L.geoJSON(geo, {
        style: function (feature) {
          // استایل خطوط بر اساس مقدار PCI
          var pci = feature.properties.Road_Type;
          let a="black"
          if (pci=="Normal Road") {
             return { color: "transparent", weight: 4 };
          }else if(pci=="Narrow Road"){
            return { color: "transparent", weight: 4 };
          }else if(pci=="ZC"){
            return { color: "transparent", weight: 4 };
          }
          else{
            return { color: "black", weight: 4 };

          }


         
        },
        onEachFeature: function (feature, layer) {
          // افزودن رویداد کلیک برای هر خط
          layer.on('click', function () {
            var name = feature.properties.Road_Type;
            alert("وضعیت: " + name);
          });
        }
      })
   // #0b88ffe0


let layer1=document.querySelector("#layer-1")
let layer2=document.querySelector("#layer-2")
let layer3=document.querySelector("#layer-3")
let layer4=document.querySelector("#layer-4")
let layer5=document.querySelector("#layer-5")
added(1)

layer1.addEventListener("click",()=>{
  added(1)
})
layer2.addEventListener("click",()=>{
  added(2)
})
layer3.addEventListener("click",()=>{
  added(3)
})
layer4.addEventListener("click",()=>{
  added(4)
})
layer5.addEventListener("click",()=>{
  added(5)
})


function added (a){

if (a==1) {
 console.log("a");
 layer1.style="border:solid  #364cffab;" 


 layer2.style="border:solid #00000036 ;" 
 layer3.style="border:solid #00000036 ;" 
 layer4.style="border:solid #00000036 ;" 
 layer5.style="border:solid #00000036 ;" 


 layer01.addTo(map);

  layer02.removeFrom(map);
  layer03.removeFrom(map);
  layer04.removeFrom(map);
  layer05.removeFrom(map);



}else if(a==2){
  layer2.style="border:solid  #364cffab;" 


  layer1.style="border:solid #00000036 ;" 
  layer3.style="border:solid #00000036 ;" 
  layer4.style="border:solid #00000036 ;" 
  layer5.style="border:solid #00000036 ;" 

  layer02.addTo(map);

  layer01.removeFrom(map);
  layer03.removeFrom(map);
  layer04.removeFrom(map);
  layer05.removeFrom(map);



}else if(a==3){
  layer3.style="border:solid  #364cffab;" 


 layer2.style="border:solid #00000036 ;" 
 layer1.style="border:solid #00000036 ;" 
 layer4.style="border:solid #00000036 ;" 
 layer5.style="border:solid #00000036 ;" 

 layer03.addTo(map);

 layer01.removeFrom(map);
 layer02.removeFrom(map);
 layer04.removeFrom(map);
 layer05.removeFrom(map);
}else if(a==4){
  layer4.style="border:solid  #364cffab;" 


 layer2.style="border:solid #00000036 ;" 
 layer3.style="border:solid #00000036 ;" 
 layer1.style="border:solid #00000036 ;" 
 layer5.style="border:solid #00000036 ;" 

 layer04.addTo(map);

 layer01.removeFrom(map);
 layer03.removeFrom(map);
 layer02.removeFrom(map);
 layer05.removeFrom(map);
}else if(a==5){
  layer5.style="border:solid  #364cffab;" 


 layer2.style="border:solid #00000036 ;" 
 layer3.style="border:solid #00000036 ;" 
 layer4.style="border:solid #00000036 ;" 
 layer1.style="border:solid #00000036 ;" 


 layer05.addTo(map);

 layer01.removeFrom(map);
 layer03.removeFrom(map);
 layer04.removeFrom(map);
 layer02.removeFrom(map);
}

} 




}
    
    gg()