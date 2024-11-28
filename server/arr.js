const arr=[
    {id:1,name:"avi",count:4},
    {id:2, name:"yohai",count:1},
    {id:3,name:"moshe",count:5},
    {id:4, name:"meir",count:1},
]

    
    const remove=(name)=>{return arr.filter(a=>a.name!=name)}

    const add=(item)=>{
        const arr1=[];
        arr.forEach(a=>arr1.push(a))
        arr1.push(item)
        return arr1
    }
   
    const update=(name)=>{
        const arr1=[];
        arr.forEach(a=> arr1.push({id:a.id,name:a.name,count:a.count}))
        return arr1.map(a=>{if(a.name==name)a.count=a.count+1; return a;}) 
    
    }
       

    module.exports = {remove,add,update}