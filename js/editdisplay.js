// display data function
async function dataDisplay()
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
                   
                   <a href="#" onclick="editDisplay(${key.id})">
                     <img src="images/edit.png" width="30" height="30" >
                   </a>
                   </td>
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("demo").innerHTML=Table;

}

dataDisplay();




// edit display function
async function editDisplay(myid)
{
  let api=`http://localhost:3000/books/${myid}`

  let Obj= await fetch(api);
  let Data=await Obj.json();
  
  myForm=`
          Edit Book Name: <input type="text" id="bookname" value="${Data.bookname}">
          <br>
           Edit Author Name: <input type="text" id="authorname" value="${Data.authorname}">
          <br>
           Edit Publish year: <input type="text" id="publishyear" value="${Data.publishyear}">
          <br>
           Edit Book Price: <input type="text" id="price" value="${Data.price}">
          <br>
          <button onclick="editSave(${Data.id})"> Edit Save! </button>
  `
  document.getElementById("demo1").innerHTML=myForm;
}
// update data from form function
async function editSave(myid)
{
  let bookname=document.getElementById("bookname").value;
  let authorname=document.getElementById("authorname").value;
  let publishyear=document.getElementById("publishyear").value;
  let price=document.getElementById("price").value;

  let api=`http://localhost:3000/books/${myid}`

  let myData={
    bookname,
    authorname,
    publishyear,
    price
  }

  const response = await fetch(api,{
    method:"PUT",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(myData)
  });
  console.log(response);
  alert("Data Updated Successfully!");
}