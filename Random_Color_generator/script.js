
// const colors = [
//   // Hexadecimal          Decimal
//   '#FF0000',            // Red
//   '#00FF00',            // Green
//   '#0000FF',            // Blue
//   '#FFFF00',            // Yellow
//   '#FF00FF',            // Magenta
//   '#00FFFF',            // Cyan
//   '#800000',            // Maroon
//   '#008000',            // Olive
//   '#000080',            // Navy
//   '#808000',            // Olive
//   '#800080',            // Purple
//   '#008080',            // Teal
//   '#C0C0C0',            // Silver
//   '#808080',            // Gray
//   '#FFA500',            // Orange
//   '#A52A2A',            // Brown
//   '#800000',            // Maroon
//   '#FF4500',            // OrangeRed
//   '#008B8B',            // DarkCyan
//   '#B8860B',            // DarkGoldenRod
//   '#8B008B',            // DarkMagenta
//   '#556B2F',            // DarkOliveGreen
//   '#FF8C00',            // DarkOrange
//   '#9932CC',            // DarkOrchid
//   '#8B0000',            // DarkRed
//   '#E9967A',            // DarkSalmon
//   '#8FBC8F',            // DarkSeaGreen
//   '#483D8B',            // DarkSlateBlue
//   '#2F4F4F',            // DarkSlateGray
//   '#00CED1',            // DarkTurquoise
//   '#9400D3',            // DarkViolet
//   '#FF1493',            // DeepPink
//   '#00BFFF',            // DeepSkyBlue
//   '#1E90FF',            // DodgerBlue
//   '#B22222',            // FireBrick
//   '#FFD700',            // Gold
//   '#DAA520',            // GoldenRod
//   '#ADFF2F',            // GreenYellow
//   '#008000',            // Green
//   '#FF69B4',            // HotPink
//   '#CD5C5C',            // IndianRed
//   '#4B0082',            // Indigo
//   '#FFFFF0',            // Ivory
//   '#F0E68C',            // Khaki
//   '#E6E6FA',            // Lavender
//   '#FFF0F5',            // LavenderBlush
//   '#7CFC00',            // LawnGreen
//   '#FFFACD',            // LemonChiffon
//   '#ADD8E6',            // LightBlue
//   '#F08080',            // LightCoral
//   '#E0FFFF',            // LightCyan
//   '#FAFAD2',            // LightGoldenRodYellow
//   '#D3D3D3',            // LightGray
//   '#90EE90',            // LightGreen
//   '#FFB6C1',            // LightPink
//   '#FFA07A',            // LightSalmon
//   '#20B2AA',            // LightSeaGreen
//   '#87CEFA',            // LightSkyBlue
//   '#778899',            // LightSlateGray
//   '#B0C4DE',            // LightSteelBlue
//   '#FFFFE0',            // LightYellow
//   '#00FF00',            // Lime
//   '#32CD32',            // LimeGreen
//   '#FAF0E6',            // Linen
//   '#800000',            // Maroon
//   '#66CDAA',            // MediumAquaMarine
//   '#0000CD',            // MediumBlue
//   '#BA55D3',            // MediumOrchid
//   '#9370DB',            // MediumPurple
//   '#3CB371',            // MediumSeaGreen
//   '#7B68EE',            // MediumSlateBlue
//   '#00FA9A',            // MediumSpringGreen
//   '#48D1CC',            // MediumTurquoise
//   '#C71585',            // MediumVioletRed
//   '#191970',            // MidnightBlue
//   '#F5FFFA',            // MintCream
//   '#FFE4E1',            // MistyRose
//   '#FFE4B5',            // Moccasin
//   '#FFDEAD',            // NavajoWhite
//   '#000080',            // Navy
//   '#FDF5E6',            // OldLace
//   '#808000',            // Olive
//   '#6B8E23',            // OliveDrab
//   '#FFA500',            // Orange
//   '#FF4500',            // OrangeRed
// ]





let btn=document.getElementById("btn")
let txt=document.getElementById("txt")
let bc=document.querySelector("body")

btn.addEventListener('click',()=>{

function getcolor(){
  const randomindex=Math.floor(Math.random() * 16777215);
  const randomcode="#"+randomindex.toString(16)

  return randomcode;
}

bc.style.backgroundColor=getcolor();
txt.innerHTML=getcolor();


});





