const Cloth = require('./../models/clothing')

const index = async (req, res) => {
    res.render('index.ejs');
  }

const home = async (req, res) => {
    const clothing = await Cloth.find({});
    res.render('clothing/index.ejs', { clothing: clothing });
}

const newCloth = (req, res) => {
    res.render('clothing/new.ejs')
}

const postCloth = async (req, res) => {
    if (req.body.addedToCart === "on") {
        req.body.addedToCart = true;
    } else {
        req.body.addedToCart = false;
    }
    await Cloth.create(req.body);
    res.redirect('clothing')
}

const showCloth = async (req, res) => {
      const findCloth = await Cloth.findById(req.params.clothId)
      res.render('clothing/show.ejs', {cloth : findCloth});
};

const deleteCloth = async (req, res) => {
    await Cloth.findByIdAndDelete(req.params.clothId);
    res.redirect("/clothing");
};

const editCloth = async (req, res) => {
    const findCloth = await Cloth.findById(req.params.clothId);
    res.render("clothing/edit.ejs", {
    cloth: findCloth,
    });
};

const updateCloth = async (req, res) => {
    if (req.body.addedToCart === "on") {
      req.body.addedToCart = true;
    } else {
      req.body.addedToCart = false;
    }
    await Cloth.findByIdAndUpdate(req.params.clothId, req.body);
    res.redirect(`/clothing/${req.params.clothId}`);
  };

  module.exports = {
    index,
    home,
    newCloth,
    postCloth,
    showCloth,
    updateCloth,
    editCloth,
    deleteCloth,
  }