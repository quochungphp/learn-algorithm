function run(from, to) {
  var data = [
    {
      "from": "AUD",
      "rate": "0.5",
      "to": "USD"
    },
    {
      "from": "USD",
      "rate": "0.5",
      "to": "EUR"
    },
    {
      "from": "EUR",
      "rate": "0.5",
      "to": "GBP"
    },
    {
      "from": "GBP",
      "rate": "2",
      "to": "EUR"
    },
    {
      "from": "EUR",
      "rate": "2",
      "to": "USD"
    },
    {
      "from": "USD",
      "rate": "2",
      "to": "AUD"
    }
  ]

  var tempData = [];
  if (from.length > 0 && to.length > 0) {
    // Find existed object by value
    for (let index = 0; index < data.length; index++) {
      // Current ele
      let element = data[index];
      // Assign value
      let f = from;
      let t = to;
      // Logic code
      if (element.from === f && element.to == t) {
        let j = 0;
        while (element) {

          if (element.from === f) {
            // Check existed
            const check = tempData.some(item => item.from === f && item.to === t);
            // Push to temp
            if (!check) {
              tempData.push(element);
            }
            // Find next ele has from value equal to value
            for (let index = 0; index < data.length; index++) {
              const ele = data[index];
              if (ele.from != t) {
                continue;
              } else {
                element = ele;
                f = element.from;
                t = element.to
                break;
              }
            }
          }
          // Continue processing
          j++;
          // Break completed
          if (j == data.length) {
            break;
          }
        }
        break;
      }
    }
    // Print output
    if (tempData) {
      console.log(`Your input currency "${from} -> ${to}" can convert to the others like as`)
      console.log(`\n==============`)
      tempData.forEach(element => {
        console.log(`Your data : ${element.from} -> ${element.to}  : ${element.rate} `)
      });
    }

  } else {
    console.log("Please enter from & to value")
  }
}

var from = "AUD";
var to = "USD";
run(from, to);
