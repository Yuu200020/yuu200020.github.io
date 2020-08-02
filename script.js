let imageClick = function(a) {
    window.alert('1の詳細');
    
  }
  document.getElementById("img1").addEventListener('click', imageClick);

  let imageClick2 = function(b) {
    window.alert('2の詳細');
    
  }
  document.getElementById("img2").addEventListener('click', imageClick2);

  let imageClick3 = function(c) {
    window.alert('3の詳細');
    
  }
  document.getElementById("img3").addEventListener('click', imageClick3);

  let imageClick4 = function(d) {
    window.alert('4の詳細');
    
  }
  document.getElementById("img4").addEventListener('click', imageClick4);
  
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");
  const img4 = document.getElementById("img4");
  
  
    let stat = false;

    function func1() {
      if(stat) {
        img1.classList.add('off');
        img1.classList.remove('on');
        
      } else {
        img1.classList.add('on');
        img1.classList.remove('off');
      }
      stat = !stat;
    }
    function func2() {
        if(stat) {
          img1.classList.add('off');
        }
        stat = !stat;
      }

      function func3() {
        if(stat) {
          img2.classList.add('off');
          img2.classList.remove('on');
          
        } else {
          img2.classList.add('on');
          img2.classList.remove('off');
        }
        stat = !stat;
      }
      function func4() {
          if(stat) {
            img2.classList.add('off');
          }
          stat = !stat;
        }
      
        function func5() {
            if(stat) {
              img3.classList.add('off');
              img3.classList.remove('on');
              
            } else {
              img3.classList.add('on');
              img3.classList.remove('off');
            }
            stat = !stat;
          }
          function func6() {
              if(stat) {
                img3.classList.add('off');
              }
              stat = !stat;
            }

            function func7() {
                if(stat) {
                  img4.classList.add('off');
                  img4.classList.remove('on');
                  
                } else {
                  img4.classList.add('on');
                  img4.classList.remove('off');
                }
                stat = !stat;
              }
              function func8() {
                  if(stat) {
                    img4.classList.add('off');
                  }
                  stat = !stat;
                }

                