 

function loadData() {
  // https://docs.google.com/spreadsheets/d/1sU1B79JiZp2vkWPKUz0wVrx798lG0lDY5hCZmPAABBA/edit?usp=sharing
  // https://docs.google.com/spreadsheets/d/1uJWsDVhM9uW0Zho3qHZV8StTm3PP30vTn5FDIIv_F6w/edit?usp=sharing
  // https://docs.google.com/spreadsheets/d/1sU1B79JiZp2vkWPKUz0wVrx798lG0lDY5hCZmPAABBA/edit?usp=sharing
  const base = 'https://docs.google.com/spreadsheets/d/1sU1B79JiZp2vkWPKUz0wVrx798lG0lDY5hCZmPAABBA/gviz/tq?';
  const output = document.querySelector('.output');
  // const query = encodeURIComponent('Select * where A = "Dungca" ');
  const query = encodeURIComponent('Select * order by  A asc, H asc, E desc');
  const url = base + '&tq=' + query;
  output.innerHTML = '';
  fetch(url)
      .then(res => res.text())
      .then(rep => {
          const data = JSON.parse(rep.substr(47).slice(0, -2));
          console.log(data.table.rows)
          // Assuming your data is an array of objects with keys like 'CompleteName', 'Gender', and 'Subject'
          data.table.rows.forEach(row => {
            output.innerHTML += `
            <tr id="${row.c[0].v}">
            <td> ${row.c[0].v}</td>
            <td> ${row.c[6].v}</td>
            <td> ${row.c[7].v}</td>
            <td> ${row.c[4].v}</td>
        </tr>
        `;

          })
      });
   }

// Call loadData() when the page loads
loadData();

function adddata(){
  const LastName = document.getElementById("LastName");
  const FirstName = document.getElementById("FirstName");
  const MiddleName = document.getElementById("MiddleName");
  const Gender = document.getElementById("Gender");
  var CompleteName = LastName.value+", " + FirstName.value + " "+ MiddleName.value;
   var ddata = 'CompleteName='+CompleteName+'&FirstName='+FirstName.value+'&MiddleName='+MiddleName.value+'&LastName='+LastName.value+'&Gender='+Gender.value+'&LRN=0000&Grdlevel=Grade 1&strand=ELEM&section=a';
   console.log(ddata)
  // var ddata = 'A=aaaaa&B=aaaaa&C=M.&D=asdasdasd'
  // var ddata = JSON.stringify({name:'aaaa'});
  const url='https://script.google.com/macros/s/AKfycbx3wjskadM7dAeDf-qIvxRpf0JKpzQdMxSaKxd1FJU5qyz7RYi1IZgequDOkyeOKX_BZQ/exec';
  fetch(
    url,
    {
      redirect: "follow",
      method: "POST",
      body: ddata,
      // headers: {
      //   "Content-Type": "text/plain;charset=utf-8",
      // },
    }
      
  )

  loadData();



  
  // fetch(url,{
  //   method:'POST',
  //   mode:'no-cors',
  //   cache:'no-cache',
  //   headers:{
  //     'Content-Type':'application/json'
  //   },
  //   redirect:'follow',
  //   body:JSON.stringify({name:'aaaa'})
  // });
  
}