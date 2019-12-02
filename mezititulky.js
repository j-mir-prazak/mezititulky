var fs = require('fs')

var items = new Array()
// var read = fs.readFile('./zazijvedu.txt', 'utf8', function(err, contents) {
//     var lines = contents.split('\n');
//     // console.log(lines.length)
//     var ind = 0
//     var count = 0;
//     for ( var i = 0; i < lines.length; i++) {
//       if (lines[i] === "") {
//         // console.log("-------------------------")
//
//        }
//        else {
//          var line=lines[i].replace(/\r?\n/, "\r\n")
//          var item = line.split("\t")
//          items.push(item)
//
//        }
//       }
//       console.log(items)
//   })

var items_list = fs.readFileSync('./anipromitacka.pod.txt', 'utf8')
var subtitles = fs.readFileSync('./mezititulky.anipromitacka.ass', 'utf8')
var lines = items_list.split('\n');
// console.log(lines.length)
var ind = 0
var count = 0;
for ( var i = 0; i < lines.length; i++) {
  if (lines[i] === "") {
    // console.log("-------------------------")

   }
   else {
     var line=lines[i].replace(/\r?\n/, "\r\n")
     var item = line.split("\t")
     items.push(item)

   }
  }
for ( var i = 0; i < items.length; i++ ) {

  // console.log(items[i])
  var subs = subtitles
  subs = subs.replace("::DIR::",items[i][1])
  subs = subs.replace("::TITLE::",items[i][0])
  subs = subs.replace("::TIME::",items[i][4])
  subs = subs.replace("::COUNTRY::",items[i][2])
  subs = subs.replace("::YEAR::",items[i][3])
  console.log(subs)
  fs.writeFileSync("./anipromitacka-pod/"+(i+1)+".ass", subs)

}

// var read = fs.readFile('./mezititulky.txt', 'utf8', function(err, contents) {
//     var lines = contents.split('\n');
//     // console.log(lines.length)
//     var ind = 0
//     var count = 0;
//     for ( var i = 0; i < lines.length; i++) {
//       if (lines[i] === "") {
//         // console.log("-------------------------")
//       }
//       else {
//         if ( lines[i].match(/(::.*?::)/) ) {
//           console.log(++count)
// 	        console.log(lines[i])
//        }
//       }
//     }
//   })
