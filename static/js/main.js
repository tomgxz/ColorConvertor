function hex2(c) { return c.length == 1 ? '0' + c : '' + c }

function rgbToHex(r, g, b) {
    var hex = [ hex2(Math.round(r).toString(16)),hex2(Math.round(g).toString(16)),hex2(Math.round(b).toString(16)) ];
    return hex.join("");
}

function hexToRgb(hex) {
    if (hex[0]=="#") { hex=hex.slice(1) }
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return { r: r, g: g, b: b };
}

function rgbOutputToStr(rgb) {
    return rgb.r+","+rgb.b+","+rgb.g
}

var form=document.getElementById("colorconversionform")
var rgbinput=form.querySelector(".input.rgb")
var hexinput=form.querySelector(".input.hex")

rgbinput.addEventListener("keyup",()=>{
    value=rgbinput.value.split(",")
    if(!(value.length==3)){return}
    for(var i=0;i<value.length;i++){value[i]=parseInt(value[i]);if(isNaN(value[i])){return}}
    hexinput.value="#"+rgbToHex(value[0],value[1],value[2])
})

hexinput.addEventListener("keyup",()=>{
    value=hexinput.value
    if(value[0]=="#"){value=value.slice(1)}
    if(!(value.length==6)){return}
    rgbinput.value=rgbOutputToStr(hexToRgb(value))
})
