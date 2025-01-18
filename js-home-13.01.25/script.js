
let promis =new Promise((resolve ,reject)=>{
    setTimeout(()=>{
        resolve('promis katarvac e')
    },1000)
})

promis
.then((result)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Առաջադրանք 1')
            console.log('Առաջադրանք 1');
            
        },1000)
    }).then((result2)=>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('Առաջադրանք 2')
                console.log('Առաջադրանք 2');
                
            },1500)
        }).then((result3)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve('Առաջադրանք 3')
                    console.log('Առաջադրանք 3');
                    
                },2000)
            })
        })
    })
})
