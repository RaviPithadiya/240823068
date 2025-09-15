const song=require("./song");

exports.index = (req,res)=>{
    song.find()
    .then((allsongs)=>{
        console.log("all songs retrieved successfully:",allsongs);
        res.send({
            message:"songs retrieved successfully",data:allsongs });
    })
    .catch((error)=>{
        console.error("error retrieving songs:",error);
    });
};

exports.show = (req,res)=>{
    song.findById(req.params.id)
    .then((song)=>{
        console.log("all songs retrieved successfully:",song);
        res.send({message:"songs retrieved successfully:",song});

    })
    .catch((error)=>{
        console.error("error retrieving songs:",error);
    });
};

exports.store =(req,res)=>{
    const newsong = new song({
        title:req.body.title,
        artist:req.body.artist,
        category:req.body.category,
        album:req.body.album,
        url:req.body.url,
        photo:req.body.photo,
        year:req.body.year,

    });
    newsong
    .save()
    .then(()=>{
        console.log("new song added successfully");
    })
    .catch((error)=>{
        console.error("error adding new song:",error);
    });
    res.send({message:"data stored successfully",data:newsong});
};

exports.update = (req, res) => {
  song.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedSong) => {
      console.log("Song updated successfully:", updatedSong);
      res.send({ message: "Song updated successfully", data: updatedSong });
    })
    .catch((error) => {
      console.error("Error updating song:", error);
    });
};

exports.delete = (req, res) => {
  song.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("Song deleted successfully");
      res.send({ message: "Song deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting song:", error);
    });
};