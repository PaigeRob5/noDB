let advice = [
    {id: 1,
    topic: "life",
    text: "Remember you’ll always regret what you didn’t do rather than what you did."
    },
{
    id:2,
    topic: "love",
    text: "The heart wants what it wants. There's no logic to these things. You meet someone and you fall in love and that's that.— Woody Allen"
},
{
    id:3,
    topic: "motivation",
    text: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed. —Michael Jordan"
}];

let id = 4;

module.exports ={
    create:(req,res)=>{
        id++
        let {topic,text}= req.body;
        advice.push({id,topic,text});
        res.status(200).send(advice);
    },
    read:(req,res)=>{
        if(req.query.topic){
        console.log(req.query.topic);
        let searchTopic = advice.filter(topics =>topics.topic  == req.query.topic)
        res.status(200).send(searchTopic);
        }
        else{
        res.status(200).send(advice);
        }},
    delete:(req,res)=>{
        let searchID = req.params.id;
        let deleteIndex = advice.findIndex(advice => advice ===searchID);
        advice.splice(deleteIndex,1);
        res.status(200).send(`Message ${searchID} deleted`);
    },
}