const reg = /\[&(.?)\*((\w|-)+)\]/gi
const msg = '[&*f1dd7643-4a94-03b9-1992-488ec3fa3c3e] [&&*807afb4b-a329-ea01-727d-f0b70f97b86e] [&1] [&*f1dd7643-4a94-03b9-1992-488ec3fa3c3e] asd [&*f1dd7643-4a94-03b9-1992-488ec3fa3c3e]'



console.log(msg.match(reg))