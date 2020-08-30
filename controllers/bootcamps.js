exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'Show all bootcamps'})
}

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success : true, msg : `Show the bootcamps ${req.params.id}`});
}
//for many
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success : true, msg :'Create new bootcamp '});

}

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success : true, msg : `Update the bootcamp ${req.params.id}`});
}
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success : true, msg : `Delete the bootcamp ${req.params.id}`});
}