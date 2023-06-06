const greet = (message = "", cb = (d) => {}) => {
    console.log(message);
    cb(message);
    updateOutput(message); // Call the function to update the output in HTML
  };
  
  function updateOutput(message) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = message + "<br><br>" + outputElement.innerHTML;
  }
  
  greet(10, () => {
    greet(9, () => {
      greet(8, () => {
        greet(7, () => {
          greet(6, () => {
            greet(5, () => {
              greet(4, () => {
                greet(3, () => {
                  greet(2, () => {
                    greet(1, () => {
                      greet("Happy Independence Day!!!");
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
  