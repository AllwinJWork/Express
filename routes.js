const cats = []
const router = require ("express").Router()
const {catModel} = require("../dbexplorer");

router.post("/create",async(req,res,next)=>{
    try {
        const created = await catModel.create(req.body);
        res.status(201).json(created);}
    catch(err){
        return next ({status:500,msg:'oops'})
    }
    })

//get request
router.get('/getAll', (req, res) => {
    res.json(cats);



});
//post request
// router.post('/create', (req, res) => {
//     const newCat = req.body;
//     cats.push(newCat);
//     res.status(201).json(cats[cats.length - 1]);
// });

//delete request
router.delete('/remove/:id', (req, res) => {
    const { id } = req.params;
    const removed = cats.splice(id, 1);
    res.json(removed);
});
//update request
router.patch('/update/:id', (req, res, next) => {
    const { id } = req.params;
    if(id>=cats.length){
        return next({msg: "ID out of bounds", status:404})
    };
    const { name } = req.query;
    const catToUpdate = cats[id];
    catToUpdate.name = name;
    res.json(catToUpdate)
});


module.exports=router;
