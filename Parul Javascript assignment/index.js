(
    function()
    {
        var detailsArr=new Array();
        detailsArr.push(["Name","Age","DOB","Email","Company"]);
        detailsArr.push(["Parul Sahni","22","06-February-2001","parulsahni3282@gmail.com","Gemini solutions Pvt. Ltd."]);
        detailsArr.push(["Kartik Arora","22","21-June-2000","ka@yahoo.com","L&T"]);
        detailsArr.push(["Shiv Sahni","20","30-July-2003","ss@hotmail.com","Google"]);
        detailsArr.push(["Spandan Chubey","22","21-April-2000","mg@gmail.com","Jio"]);

        const table=document.createElement("table");
        const tablebody=document.createElement("tbody");

        for(let i=0;i<5;i++)
        {
            const row=document.createElement("tr");
            for(let j=0;j<5;j++)
            {
                if(i==0)
                {
                    const header=document.createElement("th");
                    header.style.padding="10px";
                    const Text=document.createTextNode(detailsArr[i][j]);
                    header.appendChild(Text);
                    row.appendChild(header);
                }
                else
                {
                    const column = document.createElement("td");
                    column.style.padding = "10px";
                    const Text = document.createTextNode(detailsArr[i][j]);
                    column.appendChild(Text);
                    row.appendChild(column);
                }
            }
            tablebody.appendChild(row);
        }
        table.appendChild(tablebody);
    document.body.appendChild(table);
    
    table.setAttribute("border", "2");
    table.style.borderCollapse = "collapse";
    table.style.textAlign = 'center';
    table.style.backgroundColor="Silver";
    table.style.color="white";
    table.style.margin="auto";

    var a=document.createElement("a");
    var link=document.createTextNode("Open the link to see the Github repo");
    a.appendChild(link);
    a.title = "Open the link to see the Github repo";
    a.href = "https://github.com/ParulGEM/Parul_Javascript_Aassignment";
    document.body.appendChild(a);
    a.style.marginLeft="550px";
    }
)();
