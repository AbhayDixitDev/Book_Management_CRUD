function mydel(myid)
{
  let api=`http://localhost:3000/books/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted!!!");
  })
  
}





async function Display()
{


 let Table=`<table width="90%" border="1" bgcolor="pink">
              <tr bgcolor="orange">
                <th> Book name </th>
                <th> Author Name </th>
                <th> Publish Year </th>
                <th> Price </th>
                <th></th>
               </tr> 
           `

  let api="http://localhost:3000/books";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
        
       Table+=` <tr>
                  <td> ${key.bookname} </td>
                  <td> ${key.authorname} </td>
                  <td> ${key.publishyear} </td>
                  <td> ${key.price} </td>
                  <td>
                  <a href="#" onclick="mydel(${key.id})">

                    <img src="images/del.png" width="30" height="30" >
                  </a>
                  </td>
                </tr>  
            `
        
   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;
}

Display();