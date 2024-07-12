const {people}=require('../data')

const getPeople = (req,res)=>{
    res.status(200).json({success:true, data:people})
}

const postPeople = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(404).send("Url not found")
    }
    return res.status(200).json({success:true, data:name})
}

const putPeople = (req,res)=>{
    const{id} = req.params
    const {name} = req.body

    const peop = people.find((user)=>{
        return user.id == id
    })
    
    if(!peop){
        res.status(404).send(`Id:${id} not found!`)
    }

    const person = people.map((user)=>{
        if(user.id === Number(id)){
            user.name = name
        }
        return user
    })

    res.status(200).json({success:true,data:person})
   

}

const deletePeople = (req,res)=>{
    const {id} = req.params
    const peop = people.find((user)=>{
        return user.id == Number(id)
    })
    if(!peop){
        res.status(404).send("Requested user with Id is not Found!")
    }
   
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )

    res.status(202).json({success:true,data:newPeople})
}

module.exports={
    getPeople,
    postPeople,
    putPeople,
    deletePeople
}