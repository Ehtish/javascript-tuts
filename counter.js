 let count = 0;
      function counter() {
        count++;
        document.querySelector("h2").innerHTML = count;
        if (count % 10 === 0) {
          alert(`Count is now ${count}`);
        }
      }
      document.addEventListener('DOMContentLoaded',function() {
        // where counter is calling the function no need to write paranthesis
        document.querySelector('button').onclick = counter;
      })