function run(from, to) {
  var data = [
    {
      "from": "usd",
      "to": "aud",
      "rate": 1.38
    },
    {
      "from": "usd",
      "to": "jpy",
      "rate": 103.57
    },
    {
      "from": "usd",
      "to": "vnd",
      "rate": 23.165
    },
    {
      "from": "vnd",
      "to": "jpy",
      "rate": 0.0045
    },
    {
      "from": "vnd",
      "to": "eur",
      "rate": 0.000037
    },
    {
      "from": "vnd",
      "to": "thb",
      "rate": 0.0013
    },
    {
      "from": "jpy",
      "to": "eur",
      "rate": 0.0082
    },
    {
      "from": "jpy",
      "to": "cad",
      "rate": 0.013
    },
    {
      "from": "eur",
      "to": "usd",
      "rate": 1.18
    },
    {
      "from": "aud",
      "to": "cad",
      "rate": 0.95
    }
  ]
  var tempData = [];
  if (from.length > 0 && to.length > 0) {
    for (let index = 0; index < data.length; index++) {

      const element = data[index];
      if (element.from === from && element.to == to) {
        tempData.push(element)
      }
      var prev = data[index - 1];
      var next = data[index + 1];

      if (element.from == to) {
        console.log(element.to , from)
        tempData.push(element);
      }
    }

    if (tempData) {
      console.log(`Your money "${from} -> ${to}" can convert to the others like as`)
      console.log(`\n==============`)
      tempData.forEach(element => {
        console.log(`Your data : ${element.from} -> ${element.to}  : ${element.rate} `)
      });
    }

  } else {
    console.log("Please enter from & to value")
  }
}

var from = "usd";
var to = "jpy";
run(from, to);
